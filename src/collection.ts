type Entry<K, V> = [K, V];

interface IGroupedValues<K, V> {
  key: K;
  values: V[];
}

/**
 * A collection data structure that maps unique keys to values.
 * @class
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
   *
   * @template K - The type of keys.
   * @param keys - An array of keys to check.
   * @param isEnabled - Enables the check condition.
   * @returns An object containing keys and their existence status, or a boolean if isEnabled is true.
   */
  hasKeys(
    keys: K[],
    isEnabled: boolean = false,
  ): Record<string, boolean> | boolean {
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
   * @template V - The type of values.
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
   * Remove all key-value pairs from the collection.
   */
  clear(): void {
    this.items.clear();
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
    for (const [key, value] of this.items) {
      if (callbackFn.call(thisArg, value, key, this)) {
        result.set(key, value);
      }
    }
    return result;
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
    for (const [key, value] of this.items) {
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
    for (const [key, value] of this.items) {
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
    for (const [key, value] of this.items) {
      if (!callbackFn.call(thisArg, value, key, this)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Applies a function against an accumulator and each element in the collection to reduce it to a single value.
   * @param callbackFn - Function to execute on each element in the collection
   * @param initialValue - Value to use as the first argument to the first call of the callback
   * @returns The reduced value
   */
  reduce<U>(
    callbackFn: (
      accumulator: U,
      value: V,
      key: K,
      collection: Collection<K, V>,
    ) => U,
    initialValue?: U,
  ): U {
    let accumulator: U = initialValue as U;
    for (const [key, value] of this.items) {
      accumulator = callbackFn(accumulator, value, key, this);
    }
    return accumulator;
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
    for (const [key, value] of this.items) {
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
    const keys = Array.from(this.items.keys()).reverse();
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
   * Applies a mapping function to each value in the collection and flattens the result.
   * @param callbackFn - The mapping function to apply. It should take three arguments: the value, the key, and the collection instance.
   * @param thisArg - An optional value to use as `this` when calling the function.
   * @returns A new Collection instance with the flattened mapped values.
   */
  flat<U>(
    callbackFn: (value: V, key: K, collection: Collection<K, V>) => U[],
    thisArg?: unknown,
  ): Collection<K, U> {
    const result = new Collection<K, U>();
    for (const [key, value] of this.items) {
      const mappedValues = callbackFn.call(thisArg, value, key, this);
      for (const mappedValue of mappedValues) {
        result.set(key, mappedValue);
      }
    }
    return result;
  }

  /**
   * @returns an iterator that contains all the keys of the collection's elements.
   */
  keys(): IterableIterator<K> {
    return this.items.keys();
  }

  /**
   * @returns an iterator that contains all the values of the elements in the collection.
   */

  values(): IterableIterator<V> {
    return this.items.values();
  }

  /**
   * Returns the key of the first element in the collection that satisfies the provided testing function.
   *
   * @param callbackFn - Function to test for each element
   * @param thisArg - Object to use as 'this' when executing the callback
   * @returns The key of the first element that passes the test, or undefined if no element passes the test
   */
  findKey(
    callbackFn: (value: V, key: K, collection: Collection<K, V>) => boolean,
    thisArg?: unknown,
  ): K | undefined {
    for (const [key, value] of this.items) {
      if (callbackFn.call(thisArg, value, key, this)) {
        return key;
      }
    }
  }

  /**
   * Returns an array containing all the values of the collection in insertion order.
   * @returns An array containing all the values of the collection in insertion order
   */
  toArray(): V[] {
    return [...this.items.values()];
  }

  /**
   * Returns an array containing all the keys of the collection in insertion order.
   * @returns An array containing all the keys of the collection in insertion order
   */
  keyArray(): K[] {
    return [...this.items.keys()];
  }

  /**
   * Applies a mapping function to each value in the collection and flattens the result.
   * @param callbackFn - The mapping function to apply. It should take three arguments: the value, the key, and the collection instance.
   * @param thisArg - An optional value to use as `this` when calling the function.
   * @returns A new Collection instance with the flattened mapped values.
   */
  flatMap<U>(
    callbackFn: (value: V, key: K, collection: Collection<K, V>) => U[],
    thisArg?: unknown,
  ): Collection<K, U> {
    const result = new Collection<K, U>();
    for (const [key, value] of this.items) {
      const mappedValues = callbackFn.call(thisArg, value, key, this);
      for (const mappedValue of mappedValues) {
        result.set(key, mappedValue);
      }
    }
    return result;
  }

  /**
   * Applies a mapping function to each value in the collection and creates a new collection with the mapped values.
   * @param callbackFn - The mapping function to apply. It should take three arguments: the value, the key, and the collection instance.
   * @param thisArg - An optional value to use as `this` when calling the function.
   * @returns A new Collection instance with the mapped values.
   */
  mapValues<U>(
    callbackFn: (value: V, key: K, collection: Collection<K, V>) => U,
    thisArg?: unknown,
  ): Collection<K, U> {
    const result = new Collection<K, U>();
    for (const [key, value] of this.items) {
      const mappedValue = callbackFn.call(thisArg, value, key, this);
      result.set(key, mappedValue);
    }
    return result;
  }

  /**
   * Sorts the collection by keys in ascending order.
   * @returns A new sorted Collection instance.
   */
  defaultSort(): Collection<K, V> {
    const sortedEntries: Entry<K, V>[] = Array.from(this.entries()).sort(
      (a, b) => String(a[0]).localeCompare(String(b[0])),
    );
    return new Collection(sortedEntries);
  }

  /**
   * Sorts the collection by keys using a custom sorting function.
   * @param compareFn - The comparison function to use for sorting.
   * @returns A new sorted Collection instance.
   */
  sorted(compareFn: (a: K, b: K) => number): Collection<K, V> {
    const sortedEntries: Entry<K, V>[] = Array.from(this.entries()).sort(
      (a, b) => compareFn(a[0], b[0]),
    );
    return new Collection(sortedEntries);
  }

  /**
   * Combines the entries of two collections into a new collection.
   * @param collection - The collection to combine with.
   * @returns A new combined Collection instance.
   */
  combineEntries<Key, Value>(
    collection: Collection<Key, Value>,
  ): Collection<Key | K, Value | V> {
    const combinedEntries: Entry<Key | K, Value | V>[] = [
      ...this.entries(),
      ...collection.entries(),
    ];
    return new Collection(combinedEntries as [Key | K, Value | V][]);
  }

  /**
   * Returns the difference between two collections (elements in this collection but not in the other collection).
   * @param collection - The collection to subtract.
   * @returns A new Collection instance containing the difference.
   */
  difference<Key, Value>(
    collection: Collection<Key, Value>,
  ): Collection<Key | K, Value | V> {
    const diffEntries: Entry<Key | K, Value | V>[] = Array.from(
      this.entries() as unknown as Collection<Key | K, Value | V>,
    ).filter(([key]) => !collection.has(key as unknown as Key));
    return new Collection(diffEntries);
  }

  /**
   * Creates a new Collection that contains a subset of items based on the provided keys.
   * @param keys - An array of keys to include in the subset.
   * @returns A new Collection instance containing the subset of items.
   */
  subset(keys: K[]): Collection<K, V> {
    const subsetCollection = new Collection<K, V>();
    for (const key of keys) {
      const value = this.get(key);
      if (value !== undefined) {
        subsetCollection.set(key, value);
      }
    }
    return subsetCollection;
  }

  /**
   * Returns the intersection of two collections (elements that exist in both collections).
   * @param collection - The collection to intersect.
   * @returns A new Collection instance containing the intersection.
   */
  intersect<Key, Value>(
    collection: Collection<Key, Value>,
  ): Collection<Key | K, Value | V> {
    const intersectEntries: Entry<Key | K, Value | V>[] = Array.from(
      this.entries() as unknown as Collection<Key, Value>,
    ).filter(([key]) => collection.has(key));
    return new Collection(intersectEntries);
  }

  /**
   * Check if the current collection is equal to another collection.
   * @param collection - The collection to compare.
   * @returns True if the collections are equal, false otherwise.
   */
  equals<Key, Value>(collection: Collection<Key, Value>): boolean {
    if (this.size !== collection.size) {
      return false;
    }

    const items = this.items as unknown as Collection<Key, Value>;
    for (const [key, value] of items) {
      if (!collection.has(key) || !Object.is(value, collection.get(key))) {
        return false;
      }
    }

    return true;
  }

  /**
   * Perform an operation on each value in the collection and return the collection.
   * @param callbackFn - The function to perform on each value.
   * @returns The collection instance (for chaining).
   */
  tap(
    callbackFn: (value: V, key: K, collection: Collection<K, V>) => void,
  ): Collection<K, V> {
    for (const [key, value] of this.items) {
      callbackFn(value, key, this);
    }

    return this;
  }

  /**
   * Retrieve a random value from the collection.
   * @returns A random value from the collection, or undefined if the collection is empty.
   */
  random(): V | undefined {
    const values = this.toArray();
    if (values.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
  }

  /**
   * Retrieve the value at the specified index in the collection.
   * @param index - The index of the value to retrieve.
   * @returns The value at the specified index, or undefined if the index is out of range.
   */
  at(index: number): V | undefined {
    const values = this.toArray();
    return index >= 0 ? values[index] : values[values.length + index];
  }

  /**
   * Retrieve the last key in the collection.
   * @returns The last key in the collection, or undefined if the collection is empty.
   */
  lastKey(): K | undefined {
    const keys = this.keyArray();
    return keys[keys.length - 1];
  }

  /**
   * Retrieve the last value in the collection.
   * @returns The last value in the collection, or undefined if the collection is empty.
   */
  last(): V | undefined {
    const values = this.toArray();
    return values[values.length - 1];
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
   * Retrieve the key at the specified index in the collection.
   * @param index - The index of the key to retrieve.
   * @returns The key at the specified index, or undefined if the index is out of range.
   */
  keyAt(index: number): K | undefined {
    const keys = this.keyArray();
    return index >= 0 ? keys[index] : keys[keys.length + index];
  }

  /**
   * Retrieve a random key from the collection.
   * @returns A random key from the collection, or undefined if the collection is empty.
   */

  randomKey(): K | undefined {
    const keys = this.keyArray();
    if (keys.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
  }

  /**
   * Create a new collection with the key-value pairs reversed.
   * @returns A new Collection instance with the key-value pairs reversed.
   */
  reverse(): Collection<V, K> {
    const reversedCollection = new Collection<V, K>();
    for (const [key, value] of this.entries()) {
      reversedCollection.set(value, key);
    }
    return reversedCollection;
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
   * Create a new collection by partitioning the elements into two groups based on a condition.
   * @param callbackFn - The condition to test each element against. It should take three arguments: the value, the key, and the collection instance. Return true to include the element in the first group, false to include it in the second group.
   * @param thisArg - An optional value to use as `this` when calling the function.
   * @returns An array of two `IGroupedValues` objects representing the partitioned groups.
   */
  partition(
    callbackFn: (value: V, key: K, collection: Collection<K, V>) => boolean,
    thisArg?: unknown,
  ): IGroupedValues<K, V>[] {
    const group1: IGroupedValues<K, V> = {
      key: null as unknown as K,
      values: [],
    };
    const group2: IGroupedValues<K, V> = {
      key: null as unknown as K,
      values: [],
    };
    for (const [key, value] of this.entries()) {
      const group = callbackFn.call(thisArg, value, key, this)
        ? group1
        : group2;
      group.key = key;
      group.values.push(value);
    }

    return [group1, group2];
  }

  /**
   * Returns a new Iterator object that contains the [key, value] pairs for each element in the collection.
   * @returns A new Iterator object containing the [key, value] pairs for each element in the collection
   */
  entries(): IterableIterator<[K, V]> {
    return this.items.entries();
  }

  /**
   * @returns - an array that contains all the values of the elements of the collection, grouped by keys
   */

  toArrayByKey(): IGroupedValues<K, V>[] {
    const result: IGroupedValues<K, V>[] = [];

    for (const key of this.keys()) {
      const values = Array.from(this.filter((value, k) => k === key).values());
      result.push({ key, values });
    }
    return result;
  }

  /**
   * Creates a copy of this collection.
   */
  clone(): Collection<K, V> {
    return new Collection(Array.from(this.entries()));
  }

  /**
   * chunk - splits the collection into subcollections of the given size and returns an array with new collections
   * @param size - the amount by which this class will be divided
   * @return an array with new collections
   */
  chunk(size: number): [number, V][] {
    const chunks = [];
    const values = this.toArray();
    for (let i = 0; i < values.length; i += size) {
      const chunkValues = values.slice(i, i + size);
      const chunk = new Collection(
        chunkValues.map((value, index) => [index, value]),
      );
      chunks.push(...chunk);
    }
    return chunks;
  }

  /**
   * keyOf - returns the first key corresponding to the specified value in the collection
   * @param value - what to look for in the collection
   * @return returns the first key corresponding to the specified value in the collection
   */

  keyOf(value: V): K | undefined {
    for (const [key, val] of this.entries()) {
      if (Object.is(val, value)) {
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
    const entries: Entry<K, V>[] = Array.from(this.items.entries());
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
   * @returns an instance of the Map class that contains all the elements of the given collection
   */

  toMap(): Map<K, V> {
    return new Map(this.entries());
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
   * @returns The number of key-value pairs in the collection.
   */
  get size() {
    return this.items.size;
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
