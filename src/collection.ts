type Entry<K, V> = [K, V];

interface IGroupedValues<K, V> {
  /**
   * The key associated with the grouped values.
   */
  key: K;
  /**
   * An array of values grouped under the key.
   */
  values: V[];
}

/**
 * A collection data structure that maps unique keys to values.
 */
class Collection<K, V> {
  /**
   * The underlying map that stores the key-value pairs.
   */
  public readonly items: Map<K, V>;

  /**
   * Create a new Collection instance.
   * @param entries - An optional array of [key, value] pairs to add to the collection.
   */
  constructor(entries: readonly Entry<K, V>[] = []) {
    this.items = new Map(entries);
  }

  /**
   * Retrieve the value associated with the given key.
   * @param key - The key to look up.
   * @returns The value associated with the key, or undefined if the key is not in the collection.
   */
  get(key: K): V | undefined {
    return this.items.get(key);
  }

  /**
   * Associate the given value with the given key.
   * @param key - The key to set.
   * @param value - The value to associate with the key.
   * @returns The collection instance (for chaining).
   */
  set(key: K, value: V): Collection<K, V> {
    this.items.set(key, value);
    return this;
  }

  /**
   * Check whether the collection contains a given key.
   * @param key - The key to look for.
   * @returns True if the collection contains the key, false otherwise.
   */
  has(key: K): boolean {
    return this.items.has(key);
  }

  /**
   * Checks if keys exist and their corresponding values satisfy a condition.
   * @param keys - An array of keys to check.
   * @param isEnabled - Enables the check condition.
   * @returns An object containing keys and their existence status, or a boolean if isEnabled is true.
   */
  hasKeys(keys: K[], isEnabled = false): Record<string, boolean> | boolean {
    let result: Record<string, boolean> | boolean = {};

    for (const key of keys) {
      const has = this.has(key);

      if (isEnabled) {
        if (!has) {
          result = true;
          break;
        } else {
          result[String(key)] = has;
        }
      } else {
        result[String(key)] = has;
      }
    }
    return typeof result === "boolean"
      ? result
      : Object.keys(result).length > 0
        ? result
        : false;
  }

  /**
   * Checks if values exist and their corresponding keys satisfy a condition.
   * @param values - An array of values to check.
   * @param isEnabled - Enables the check condition.
   * @returns An object containing values and their existence status, or a boolean if isEnabled is true.
   */
  hasValues(values: V[], isEnabled = false): Record<string, boolean> | boolean {
    let result: Record<string, boolean> | boolean = {};

    for (const value of values) {
      const key = this.keyOf(value);
      const hasKey = this.has(key as K);

      if (isEnabled) {
        if (!hasKey) {
          result = true;
          break;
        } else {
          result[String(value)] = hasKey;
        }
      } else {
        result[String(value)] = hasKey;
      }
    }

    return typeof result === "boolean"
      ? result
      : Object.keys(result).length > 0
        ? result
        : false;
  }

  /**
   * Remove the key-value pair associated with the given key.
   * @param key - The key to remove.
   * @returns True if the key-value pair was removed, false if the key was not in the collection.
   */
  delete(key: K): boolean {
    const deleted = this.items.delete(key);
    return deleted;
  }

  /**
   * Ensure that a key exists in the collection. If the key does not exist, it will be associated with the given value.
   * @param key - The key to ensure.
   * @param value - The value to associate with the key if it does not exist.
   * @returns The collection instance (for chaining).
   */
  ensure(key: K, value: V): Collection<K, V> {
    if (!this.has(key)) {
      this.set(key, value);
    }
    return this;
  }

  /**
   * Remove all key-value pairs from the collection.
   */
  clear(): void {
    this.items.clear();
  }

  /**
   * Retrieve a random value from the collection.
   * @returns A random value from the collection, or undefined if the collection is empty.
   */
  random(): V | undefined {
    const values = this.values();
    if (values.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
  }

  /**
   * Call a given function for each key-value pair in the collection.
   * @param callbackFn - The function to call for each pair. It should take three arguments: the value, the key, and the collection instance.
   * @param thisArg - An optional value to use as `this` when calling the function.
   */
  forEach(
    callbackFn: (value: V, key: K, collection: Collection<K, V>) => void,
    thisArg?: unknown,
  ): void {
    for (const [key, value] of this.items) {
      callbackFn.call(thisArg, value, key, this);
    }
  }

  /**
   * Create a new collection that includes only the key-value pairs that satisfy a given condition.
   * @param callbackFn - The condition to test each pair against. It should take three arguments: the value, the key, and the collection instance. Return true to include the pair, false to exclude it.
   * @param thisArg - An optional value to use as `this` when calling the function.
   * @returns A new Collection instance containing the filtered key-value pairs.
   */
  filter(
    callbackFn: (value: V, key: K, collection: Collection<K, V>) => boolean,
    thisArg?: unknown,
  ): Collection<K, V> {
    const result = new Collection<K, V>();
    for (const [key, value] of this) {
      if (callbackFn.call(thisArg, value, key, this)) {
        result.set(key, value);
      }
    }
    return result;
  }

  /**
   * Returns the value of the first element in the collection that satisfies the provided testing function.
   * @param callbackFn - Function to test for each element
   * @param thisArg - Object to use as 'this' when executing the callback
   * @returns The value of the first element that passes the test, or undefined if no element passes the test
   */
  find(
    callbackFn: (value: V, key: K, collection: Collection<K, V>) => boolean,
    thisArg?: unknown,
  ): V | undefined {
    for (const [key, value] of this) {
      if (callbackFn.call(thisArg, value, key, this)) {
        return value;
      }
    }
  }

  /**
   * Returns the value of the first element in the collection that satisfies the provided testing function.
   * @param callbackFn - Function to test for each element
   * @param thisArg - Object to use as 'this' when executing the callback
   * @returns The value of the first element that passes the test, or undefined if no element passes the test
   */
  findLast(
    callbackFn: (value: V, key: K, collection: Collection<K, V>) => boolean,
    thisArg?: unknown,
  ): V | undefined {
    for (const [key, value] of this.toReversed().items) {
      if (callbackFn.call(thisArg, value, key, this)) {
        return value;
      }
    }
  }

  /**
   * Applies a function against an accumulator and each element in the collection (from right to left)
   * to reduce it to a single value.
   * @param callbackFn - Function to execute on each element in the collection
   * @param initialValue - Value to use as the first argument to the first call of the callback
   * @returns The reduced value
   */
  reduceRight<U>(
    callbackFn: (
      accumulator: U,
      value: V,
      key: K,
      collection: Collection<K, V>,
    ) => U,
    initialValue?: U,
  ): U {
    const keys = this.toReversed().keys();
    let accumulator: U = initialValue as U;

    for (const key of keys) {
      const value = this.items.get(key);
      if (value !== undefined) {
        accumulator = callbackFn(accumulator, value, key, this);
      }
    }
    return accumulator;
  }

  /**
   * Creates a new collection with the results of calling a provided function on every element in the calling collection.
   * @param callbackFn - Function that produces an element of the new collection
   * @param thisArg - Object to use as 'this' when executing the callback
   * @returns A new collection with the results of calling the callback on each element
   */
  map<U>(
    callbackFn: (value: V, key: K, collection: Collection<K, V>) => U,
    thisArg?: unknown,
  ): Collection<K, U> {
    const result = new Collection<K, U>();
    for (const [key, value] of this) {
      result.set(key, callbackFn.call(thisArg, value, key, this));
    }
    return result;
  }

  /**
   * Tests whether at least one element in the collection passes the test implemented by the provided function.
   * @param callbackFn - Function to test for each element
   * @param thisArg - Object to use as 'this' when executing the callback
   * @returns True if at least one element passes the test, false otherwise
   */
  some(
    callbackFn: (value: V, key: K, collection: Collection<K, V>) => boolean,
    thisArg?: unknown,
  ): boolean {
    for (const [key, value] of this) {
      if (callbackFn.call(thisArg, value, key, this)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Tests whether all elements in the collection pass the test implemented by the provided function.
   * @param callbackFn - Function to test for each element
   * @param thisArg - Object to use as 'this' when executing the callback
   * @returns True if all elements pass the test, false otherwise
   */
  every(
    callbackFn: (value: V, key: K, collection: Collection<K, V>) => boolean,
    thisArg?: unknown,
  ): boolean {
    for (const [key, value] of this) {
      if (!callbackFn.call(thisArg, value, key, this)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Returns an array containing the keys in the same order as the original collection.
   * @returns An array of keys.
   */
  keys(): K[] {
    return Array.from(this.items.keys());
  }

  /**
   * Returns an array containing the values in the same order as the original collection.
   * @returns An array of values.
   */
  values(): V[] {
    return Array.from(this.items.values());
  }

  /**
   * Returns an array containing all of the key-value pairs in the same order as the original collection.
   * @returns An array of [key, value] pairs.
   */
  entries(): Entry<K, V>[] {
    return Array.from(this.items.entries());
  }

  /**
   * Returns the first key found to be associated with the given value.
   * @param value - The value to search for.
   * @returns The key associated with the value, or undefined if the value is not found.
   */
  keyOf(value: V): K | undefined {
    for (const [key, val] of this.items) {
      if (val === value) {
        return key;
      }
    }
    return undefined;
  }

  /**
   * Returns a new Collection with the value at the specified index replaced.
   * @template K, V
   * @param index - The index of the element to replace.
   * @param value - The new value to assign.
   * @returns A new Collection with the updated value.
   */
  with(index: number, value: V): Collection<K, V> | undefined {
    const entries: Entry<K, V>[] = Array.from(this.entries());
    if (index >= 0) {
      if (!entries[index]) return;
      entries[index][1] = value;
    } else {
      if (!entries[entries.length + index]) return;
      entries[entries.length + index][1] = value;
    }
    return new Collection(entries);
  }

  /**
   * Creates a copy of this collection.
   */
  clone(): Collection<K, V> {
    return new Collection(Array.from(this.entries()));
  }

  /**
   * @returns an instance of the Map class that contains all the elements of the given collection
   */
  toMap(): Map<K, V> {
    return new Map(this.entries());
  }

  /**
   * Create a new collection with the key-value pairs reversed.
   * @returns A new Collection instance with the key-value pairs reversed.
   */
  reverse(): void {
    for (const [key, value] of this.entries()) {
      this.set(key, value);
    }
  }

  /**
   * Returns a new Collection instance with the key-value pairs in reversed order.
   * @returns A new Collection instance with the reversed key-value pairs.
   */
  toReversed(): Collection<K, V> {
    const entries = Array.from(this.entries()).reverse();
    return new Collection(entries);
  }

  /**
   * Returns a new Collection instance containing a subset of key-value pairs starting from the specified start index (inclusive) to the specified end index (exclusive).
   * @param start - The start index.
   * @param end - The end index.
   * @returns A new Collection instance with the specified subset of key-value pairs.
   */
  toSplised(start: number, end: number): Collection<K, V> {
    const entries = Array.from(this.entries()).slice(start, end);
    return new Collection(entries);
  }

  /**
   * Sorts the collection by keys using a custom sorting function.
   * @param compareFn - The comparison function to use for sorting.
   * @returns A new sorted Collection instance.
   */
  sort(
    compareFn: (a: [K, V], b: [K, V]) => number = (a, b) =>
      String(a[0]).localeCompare(String(b[0])),
  ): Collection<K, V> {
    const sortedEntries: Entry<K, V>[] = this.entries().sort((a, b) =>
      compareFn(a, b),
    );
    this.clear();
    for (const [key, value] of sortedEntries) {
      this.set(key, value);
    }
    return this;
  }

  /**
   * Sorts the collection by keys using a custom sorting function.
   * @param compareFn - The comparison function to use for sorting.
   * @returns A new sorted Collection instance.
   */
  toSorted(
    compareFn: (a: [K, V], b: [K, V]) => number = (a, b) =>
      String(a[0]).localeCompare(String(b[0])),
  ): Collection<K, V> {
    const sortedEntries: Entry<K, V>[] = Array.from(this.entries()).sort(
      (a, b) => compareFn(a, b),
    );
    return new Collection(sortedEntries);
  }

  /**
   * Create a new collection with all duplicate values removed.
   * @returns A new Collection instance with all duplicate values removed.
   */
  sweep(): Collection<K, V> {
    const uniqueValues = new Set<V>();
    const sweptCollection = new Collection<K, V>();

    for (const [key, value] of this.entries()) {
      if (!uniqueValues.has(value)) {
        uniqueValues.add(value);
        sweptCollection.set(key, value);
      }
    }

    return sweptCollection;
  }

  /**
   * Returns the number of key-value pairs in the collection.
   * @returns The number of key-value pairs.
   */
  get size(): number {
    return this.items.size;
  }

  /**
   * Checks if the collection contains any key-value pairs.
   * @returns True if the collection is empty, false otherwise.
   */
  get isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Groups the values of the collection by the result of a provided function.
   * @param callbackFn - Function to transform each value into a key for grouping
   * @returns An array of objects representing the grouped values, with each object containing a key and an array of values
   */
  groupBy<T>(
    callbackFn: (value: V, key: K, collection: Collection<K, V>) => T,
  ): IGroupedValues<T, V>[] {
    const groups: Map<T, V[]> = new Map();

    this.forEach((value, key) => {
      const groupKey = callbackFn(value, key, this);
      const group = groups.get(groupKey);

      if (group) {
        group.push(value);
      } else {
        groups.set(groupKey, [value]);
      }
    });

    return Array.from(groups.entries()).map(([key, values]) => ({
      key,
      values,
    }));
  }

  /**
   * Returns an object that contains all the elements of the collection as properties of the keys.
   * @returns An object containing the elements of the collection.
   */
  toJSON(): { [key: string]: V } {
    const json: { [key: string]: V } = {};
    for (const [key, value] of this.items) {
      json[String(key)] = value;
    }
    return json;
  }

  /**
   * Returns a new Iterator object that contains the [key, value] pairs for each element in the collection.
   * @returns An iterator object that can be used to iterate over the key-value pairs of the Collection.
   */
  *[Symbol.iterator](): IterableIterator<[K, V]> {
    yield* this.items.entries();
  }
}

export { Collection, Entry, IGroupedValues };
