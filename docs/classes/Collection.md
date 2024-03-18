[@telegram.ts/collection](../README.md) / [Exports](../modules.md) / Collection

# Class: Collection\<K, V\>

A collection data structure that maps unique keys to values.

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Table of contents

### Constructors

- [constructor](Collection.md#constructor)

### Properties

- [items](Collection.md#items)

### Accessors

- [size](Collection.md#size)

### Methods

- [[iterator]](Collection.md#[iterator])
- [at](Collection.md#at)
- [chunk](Collection.md#chunk)
- [clear](Collection.md#clear)
- [clone](Collection.md#clone)
- [combineEntries](Collection.md#combineentries)
- [defaultSort](Collection.md#defaultsort)
- [delete](Collection.md#delete)
- [difference](Collection.md#difference)
- [ensure](Collection.md#ensure)
- [entries](Collection.md#entries)
- [equals](Collection.md#equals)
- [every](Collection.md#every)
- [filter](Collection.md#filter)
- [find](Collection.md#find)
- [findKey](Collection.md#findkey)
- [flat](Collection.md#flat)
- [flatMap](Collection.md#flatmap)
- [forEach](Collection.md#foreach)
- [get](Collection.md#get)
- [has](Collection.md#has)
- [hasKeys](Collection.md#haskeys)
- [hasValues](Collection.md#hasvalues)
- [intersect](Collection.md#intersect)
- [keyArray](Collection.md#keyarray)
- [keyAt](Collection.md#keyat)
- [keyOf](Collection.md#keyof)
- [keys](Collection.md#keys)
- [last](Collection.md#last)
- [lastKey](Collection.md#lastkey)
- [map](Collection.md#map)
- [mapValues](Collection.md#mapvalues)
- [partition](Collection.md#partition)
- [random](Collection.md#random)
- [randomKey](Collection.md#randomkey)
- [reduce](Collection.md#reduce)
- [reduceRight](Collection.md#reduceright)
- [reverse](Collection.md#reverse)
- [set](Collection.md#set)
- [some](Collection.md#some)
- [sorted](Collection.md#sorted)
- [subset](Collection.md#subset)
- [sweep](Collection.md#sweep)
- [tap](Collection.md#tap)
- [toArray](Collection.md#toarray)
- [toArrayByKey](Collection.md#toarraybykey)
- [toJSON](Collection.md#tojson)
- [toMap](Collection.md#tomap)
- [toReversed](Collection.md#toreversed)
- [toSplised](Collection.md#tosplised)
- [values](Collection.md#values)
- [with](Collection.md#with)

## Constructors

### constructor

• **new Collection**\<`K`, `V`\>(`entries?`): [`Collection`](Collection.md)\<`K`, `V`\>

Create a new Collection instance.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `entries` | readonly [`Entry`](../modules.md#entry)\<`K`, `V`\>[] | `[]` | An optional array of [key, value] pairs to add to the collection. |

#### Returns

[`Collection`](Collection.md)\<`K`, `V`\>

#### Defined in

[collection.ts:22](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L22)

## Properties

### items

• `Readonly` **items**: `Map`\<`K`, `V`\>

The underlying map that stores the key-value pairs.

#### Defined in

[collection.ts:16](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L16)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

The number of key-value pairs in the collection.

#### Defined in

[collection.ts:778](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L778)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<[`K`, `V`]\>

Returns a new Iterator object that contains the [key, value] pairs for each element in the collection.

#### Returns

`IterableIterator`\<[`K`, `V`]\>

An iterator object that can be used to iterate over the key-value pairs of the Collection.

#### Defined in

[collection.ts:786](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L786)

___

### at

▸ **at**(`index`): `undefined` \| `V`

Retrieve the value at the specified index in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the value to retrieve. |

#### Returns

`undefined` \| `V`

The value at the specified index, or undefined if the index is out of range.

#### Defined in

[collection.ts:536](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L536)

___

### chunk

▸ **chunk**(`size`): [`number`, `V`][]

chunk - splits the collection into subcollections of the given size and returns an array with new collections

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | the amount by which this class will be divided |

#### Returns

[`number`, `V`][]

an array with new collections

#### Defined in

[collection.ts:687](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L687)

___

### clear

▸ **clear**(): `void`

Remove all key-value pairs from the collection.

#### Returns

`void`

#### Defined in

[collection.ts:136](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L136)

___

### clone

▸ **clone**(): [`Collection`](Collection.md)\<`K`, `V`\>

Creates a copy of this collection.

#### Returns

[`Collection`](Collection.md)\<`K`, `V`\>

#### Defined in

[collection.ts:678](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L678)

___

### combineEntries

▸ **combineEntries**\<`Key`, `Value`\>(`collection`): [`Collection`](Collection.md)\<`K` \| `Key`, `V` \| `Value`\>

Combines the entries of two collections into a new collection.

#### Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | [`Collection`](Collection.md)\<`Key`, `Value`\> | The collection to combine with. |

#### Returns

[`Collection`](Collection.md)\<`K` \| `Key`, `V` \| `Value`\>

A new combined Collection instance.

#### Defined in

[collection.ts:429](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L429)

___

### defaultSort

▸ **defaultSort**(): [`Collection`](Collection.md)\<`K`, `V`\>

Sorts the collection by keys in ascending order.

#### Returns

[`Collection`](Collection.md)\<`K`, `V`\>

A new sorted Collection instance.

#### Defined in

[collection.ts:405](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L405)

___

### delete

▸ **delete**(`key`): `boolean`

Remove the key-value pair associated with the given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key to remove. |

#### Returns

`boolean`

True if the key-value pair was removed, false if the key was not in the collection.

#### Defined in

[collection.ts:128](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L128)

___

### difference

▸ **difference**\<`Key`, `Value`\>(`collection`): [`Collection`](Collection.md)\<`K` \| `Key`, `V` \| `Value`\>

Returns the difference between two collections (elements in this collection but not in the other collection).

#### Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | [`Collection`](Collection.md)\<`Key`, `Value`\> | The collection to subtract. |

#### Returns

[`Collection`](Collection.md)\<`K` \| `Key`, `V` \| `Value`\>

A new Collection instance containing the difference.

#### Defined in

[collection.ts:444](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L444)

___

### ensure

▸ **ensure**(`key`, `value`): [`Collection`](Collection.md)\<`K`, `V`\>

Ensure that a key exists in the collection. If the key does not exist, it will be associated with the given value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key to ensure. |
| `value` | `V` | The value to associate with the key if it does not exist. |

#### Returns

[`Collection`](Collection.md)\<`K`, `V`\>

The collection instance (for chaining).

#### Defined in

[collection.ts:565](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L565)

___

### entries

▸ **entries**(): `IterableIterator`\<[`K`, `V`]\>

Returns a new Iterator object that contains the [key, value] pairs for each element in the collection.

#### Returns

`IterableIterator`\<[`K`, `V`]\>

A new Iterator object containing the [key, value] pairs for each element in the collection

#### Defined in

[collection.ts:657](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L657)

___

### equals

▸ **equals**\<`Key`, `Value`\>(`collection`): `boolean`

Check if the current collection is equal to another collection.

#### Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | [`Collection`](Collection.md)\<`Key`, `Value`\> | The collection to compare. |

#### Returns

`boolean`

True if the collections are equal, false otherwise.

#### Defined in

[collection.ts:488](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L488)

___

### every

▸ **every**(`callbackFn`, `thisArg?`): `boolean`

Tests whether all elements in the collection pass the test implemented by the provided function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)\<`K`, `V`\>) => `boolean` | Function to test for each element |
| `thisArg?` | `unknown` | Object to use as 'this' when executing the callback |

#### Returns

`boolean`

True if all elements pass the test, false otherwise

#### Defined in

[collection.ts:215](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L215)

___

### filter

▸ **filter**(`callbackFn`, `thisArg?`): [`Collection`](Collection.md)\<`K`, `V`\>

Create a new collection that includes only the key-value pairs that satisfy a given condition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)\<`K`, `V`\>) => `boolean` | The condition to test each pair against. It should take three arguments: the value, the key, and the collection instance. Return true to include the pair, false to exclude it. |
| `thisArg?` | `unknown` | An optional value to use as `this` when calling the function. |

#### Returns

[`Collection`](Collection.md)\<`K`, `V`\>

A new Collection instance containing the filtered key-value pairs.

#### Defined in

[collection.ts:161](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L161)

___

### find

▸ **find**(`callbackFn`, `thisArg?`): `undefined` \| `V`

Returns the value of the first element in the collection that satisfies the provided testing function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)\<`K`, `V`\>) => `boolean` | Function to test for each element |
| `thisArg?` | `unknown` | Object to use as 'this' when executing the callback |

#### Returns

`undefined` \| `V`

The value of the first element that passes the test, or undefined if no element passes the test

#### Defined in

[collection.ts:255](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L255)

___

### findKey

▸ **findKey**(`callbackFn`, `thisArg?`): `undefined` \| `K`

Returns the key of the first element in the collection that satisfies the provided testing function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)\<`K`, `V`\>) => `boolean` | Function to test for each element |
| `thisArg?` | `unknown` | Object to use as 'this' when executing the callback |

#### Returns

`undefined` \| `K`

The key of the first element that passes the test, or undefined if no element passes the test

#### Defined in

[collection.ts:336](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L336)

___

### flat

▸ **flat**\<`U`\>(`callbackFn`, `thisArg?`): [`Collection`](Collection.md)\<`K`, `U`\>

Applies a mapping function to each value in the collection and flattens the result.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)\<`K`, `V`\>) => `U`[] | The mapping function to apply. It should take three arguments: the value, the key, and the collection instance. |
| `thisArg?` | `unknown` | An optional value to use as `this` when calling the function. |

#### Returns

[`Collection`](Collection.md)\<`K`, `U`\>

A new Collection instance with the flattened mapped values.

#### Defined in

[collection.ts:300](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L300)

___

### flatMap

▸ **flatMap**\<`U`\>(`callbackFn`, `thisArg?`): [`Collection`](Collection.md)\<`K`, `U`\>

Applies a mapping function to each value in the collection and flattens the result.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)\<`K`, `V`\>) => `U`[] | The mapping function to apply. It should take three arguments: the value, the key, and the collection instance. |
| `thisArg?` | `unknown` | An optional value to use as `this` when calling the function. |

#### Returns

[`Collection`](Collection.md)\<`K`, `U`\>

A new Collection instance with the flattened mapped values.

#### Defined in

[collection.ts:369](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L369)

___

### forEach

▸ **forEach**(`callbackFn`, `thisArg?`): `void`

Call a given function for each key-value pair in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)\<`K`, `V`\>) => `void` | The function to call for each pair. It should take three arguments: the value, the key, and the collection instance. |
| `thisArg?` | `unknown` | An optional value to use as `this` when calling the function. |

#### Returns

`void`

#### Defined in

[collection.ts:145](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L145)

___

### get

▸ **get**(`key`): `undefined` \| `V`

Retrieve the value associated with the given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key to look up. |

#### Returns

`undefined` \| `V`

The value associated with the key, or undefined if the key is not in the collection.

#### Defined in

[collection.ts:31](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L31)

___

### has

▸ **has**(`key`): `boolean`

Check whether the collection contains a given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key to look for. |

#### Returns

`boolean`

True if the collection contains the key, false otherwise.

#### Defined in

[collection.ts:51](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L51)

___

### hasKeys

▸ **hasKeys**(`keys`, `isEnabled?`): `boolean` \| `Record`\<`string`, `boolean`\>

Checks if keys exist and their corresponding values satisfy a condition.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `keys` | `K`[] | `undefined` | An array of keys to check. |
| `isEnabled` | `boolean` | `false` | Enables the check condition. |

#### Returns

`boolean` \| `Record`\<`string`, `boolean`\>

An object containing keys and their existence status, or a boolean if isEnabled is true.

#### Defined in

[collection.ts:63](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L63)

___

### hasValues

▸ **hasValues**(`values`, `isEnabled?`): `boolean` \| `Record`\<`string`, `boolean`\>

Checks if values exist and their corresponding keys satisfy a condition.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `values` | `V`[] | `undefined` | An array of values to check. |
| `isEnabled` | `boolean` | `false` | Enables the check condition. |

#### Returns

`boolean` \| `Record`\<`string`, `boolean`\>

An object containing values and their existence status, or a boolean if isEnabled is true.

#### Defined in

[collection.ts:97](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L97)

___

### intersect

▸ **intersect**\<`Key`, `Value`\>(`collection`): [`Collection`](Collection.md)\<`K` \| `Key`, `V` \| `Value`\>

Returns the intersection of two collections (elements that exist in both collections).

#### Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | [`Collection`](Collection.md)\<`Key`, `Value`\> | The collection to intersect. |

#### Returns

[`Collection`](Collection.md)\<`K` \| `Key`, `V` \| `Value`\>

A new Collection instance containing the intersection.

#### Defined in

[collection.ts:474](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L474)

___

### keyArray

▸ **keyArray**(): `K`[]

Returns an array containing all the keys of the collection in insertion order.

#### Returns

`K`[]

An array containing all the keys of the collection in insertion order

#### Defined in

[collection.ts:359](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L359)

___

### keyAt

▸ **keyAt**(`index`): `undefined` \| `K`

Retrieve the key at the specified index in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the key to retrieve. |

#### Returns

`undefined` \| `K`

The key at the specified index, or undefined if the index is out of range.

#### Defined in

[collection.ts:577](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L577)

___

### keyOf

▸ **keyOf**(`value`): `undefined` \| `K`

keyOf - returns the first key corresponding to the specified value in the collection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `V` | what to look for in the collection |

#### Returns

`undefined` \| `K`

returns the first key corresponding to the specified value in the collection

#### Defined in

[collection.ts:706](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L706)

___

### keys

▸ **keys**(): `IterableIterator`\<`K`\>

#### Returns

`IterableIterator`\<`K`\>

an iterator that contains all the keys of the collection's elements.

#### Defined in

[collection.ts:317](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L317)

___

### last

▸ **last**(): `undefined` \| `V`

Retrieve the last value in the collection.

#### Returns

`undefined` \| `V`

The last value in the collection, or undefined if the collection is empty.

#### Defined in

[collection.ts:554](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L554)

___

### lastKey

▸ **lastKey**(): `undefined` \| `K`

Retrieve the last key in the collection.

#### Returns

`undefined` \| `K`

The last key in the collection, or undefined if the collection is empty.

#### Defined in

[collection.ts:545](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L545)

___

### map

▸ **map**\<`U`\>(`callbackFn`, `thisArg?`): [`Collection`](Collection.md)\<`K`, `U`\>

Creates a new collection with the results of calling a provided function on every element in the calling collection.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)\<`K`, `V`\>) => `U` | Function that produces an element of the new collection |
| `thisArg?` | `unknown` | Object to use as 'this' when executing the callback |

#### Returns

[`Collection`](Collection.md)\<`K`, `U`\>

A new collection with the results of calling the callback on each element

#### Defined in

[collection.ts:180](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L180)

___

### mapValues

▸ **mapValues**\<`U`\>(`callbackFn`, `thisArg?`): [`Collection`](Collection.md)\<`K`, `U`\>

Applies a mapping function to each value in the collection and creates a new collection with the mapped values.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)\<`K`, `V`\>) => `U` | The mapping function to apply. It should take three arguments: the value, the key, and the collection instance. |
| `thisArg?` | `unknown` | An optional value to use as `this` when calling the function. |

#### Returns

[`Collection`](Collection.md)\<`K`, `U`\>

A new Collection instance with the mapped values.

#### Defined in

[collection.ts:389](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L389)

___

### partition

▸ **partition**(`callbackFn`, `thisArg?`): [`IGroupedValues`](../interfaces/IGroupedValues.md)\<`K`, `V`\>[]

Create a new collection by partitioning the elements into two groups based on a condition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)\<`K`, `V`\>) => `boolean` | The condition to test each element against. It should take three arguments: the value, the key, and the collection instance. Return true to include the element in the first group, false to include it in the second group. |
| `thisArg?` | `unknown` | An optional value to use as `this` when calling the function. |

#### Returns

[`IGroupedValues`](../interfaces/IGroupedValues.md)\<`K`, `V`\>[]

An array of two `IGroupedValues` objects representing the partitioned groups.

#### Defined in

[collection.ts:630](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L630)

___

### random

▸ **random**(): `undefined` \| `V`

Retrieve a random value from the collection.

#### Returns

`undefined` \| `V`

A random value from the collection, or undefined if the collection is empty.

#### Defined in

[collection.ts:522](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L522)

___

### randomKey

▸ **randomKey**(): `undefined` \| `K`

Retrieve a random key from the collection.

#### Returns

`undefined` \| `K`

A random key from the collection, or undefined if the collection is empty.

#### Defined in

[collection.ts:587](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L587)

___

### reduce

▸ **reduce**\<`U`\>(`callbackFn`, `initialValue?`): `U`

Applies a function against an accumulator and each element in the collection to reduce it to a single value.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`accumulator`: `U`, `value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)\<`K`, `V`\>) => `U` | Function to execute on each element in the collection |
| `initialValue?` | `U` | Value to use as the first argument to the first call of the callback |

#### Returns

`U`

The reduced value

#### Defined in

[collection.ts:233](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L233)

___

### reduceRight

▸ **reduceRight**\<`U`\>(`callbackFn`, `initialValue?`): `U`

Applies a function against an accumulator and each element in the collection (from right to left)
to reduce it to a single value.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`accumulator`: `U`, `value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)\<`K`, `V`\>) => `U` | Function to execute on each element in the collection |
| `initialValue?` | `U` | Value to use as the first argument to the first call of the callback |

#### Returns

`U`

The reduced value

#### Defined in

[collection.ts:273](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L273)

___

### reverse

▸ **reverse**(): [`Collection`](Collection.md)\<`V`, `K`\>

Create a new collection with the key-value pairs reversed.

#### Returns

[`Collection`](Collection.md)\<`V`, `K`\>

A new Collection instance with the key-value pairs reversed.

#### Defined in

[collection.ts:598](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L598)

___

### set

▸ **set**(`key`, `value`): [`Collection`](Collection.md)\<`K`, `V`\>

Associate the given value with the given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key to set. |
| `value` | `V` | The value to associate with the key. |

#### Returns

[`Collection`](Collection.md)\<`K`, `V`\>

The collection instance (for chaining).

#### Defined in

[collection.ts:41](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L41)

___

### some

▸ **some**(`callbackFn`, `thisArg?`): `boolean`

Tests whether at least one element in the collection passes the test implemented by the provided function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)\<`K`, `V`\>) => `boolean` | Function to test for each element |
| `thisArg?` | `unknown` | Object to use as 'this' when executing the callback |

#### Returns

`boolean`

True if at least one element passes the test, false otherwise

#### Defined in

[collection.ts:197](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L197)

___

### sorted

▸ **sorted**(`compareFn`): [`Collection`](Collection.md)\<`K`, `V`\>

Sorts the collection by keys using a custom sorting function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn` | (`a`: `K`, `b`: `K`) => `number` | The comparison function to use for sorting. |

#### Returns

[`Collection`](Collection.md)\<`K`, `V`\>

A new sorted Collection instance.

#### Defined in

[collection.ts:417](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L417)

___

### subset

▸ **subset**(`keys`): [`Collection`](Collection.md)\<`K`, `V`\>

Creates a new Collection that contains a subset of items based on the provided keys.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `K`[] | An array of keys to include in the subset. |

#### Returns

[`Collection`](Collection.md)\<`K`, `V`\>

A new Collection instance containing the subset of items.

#### Defined in

[collection.ts:458](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L458)

___

### sweep

▸ **sweep**(): [`Collection`](Collection.md)\<`K`, `V`\>

Create a new collection with all duplicate values removed.

#### Returns

[`Collection`](Collection.md)\<`K`, `V`\>

A new Collection instance with all duplicate values removed.

#### Defined in

[collection.ts:610](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L610)

___

### tap

▸ **tap**(`callbackFn`): [`Collection`](Collection.md)\<`K`, `V`\>

Perform an operation on each value in the collection and return the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)\<`K`, `V`\>) => `void` | The function to perform on each value. |

#### Returns

[`Collection`](Collection.md)\<`K`, `V`\>

The collection instance (for chaining).

#### Defined in

[collection.ts:508](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L508)

___

### toArray

▸ **toArray**(): `V`[]

Returns an array containing all the values of the collection in insertion order.

#### Returns

`V`[]

An array containing all the values of the collection in insertion order

#### Defined in

[collection.ts:351](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L351)

___

### toArrayByKey

▸ **toArrayByKey**(): [`IGroupedValues`](../interfaces/IGroupedValues.md)\<`K`, `V`\>[]

#### Returns

[`IGroupedValues`](../interfaces/IGroupedValues.md)\<`K`, `V`\>[]

- an array that contains all the values of the elements of the collection, grouped by keys

#### Defined in

[collection.ts:665](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L665)

___

### toJSON

▸ **toJSON**(): `Object`

Returns an object that contains all the elements of the collection as properties of the keys.

#### Returns

`Object`

An object containing the elements of the collection.

#### Defined in

[collection.ts:767](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L767)

___

### toMap

▸ **toMap**(): `Map`\<`K`, `V`\>

#### Returns

`Map`\<`K`, `V`\>

an instance of the Map class that contains all the elements of the given collection

#### Defined in

[collection.ts:739](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L739)

___

### toReversed

▸ **toReversed**(): [`Collection`](Collection.md)\<`K`, `V`\>

Returns a new Collection instance with the key-value pairs in reversed order.

#### Returns

[`Collection`](Collection.md)\<`K`, `V`\>

A new Collection instance with the reversed key-value pairs.

#### Defined in

[collection.ts:747](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L747)

___

### toSplised

▸ **toSplised**(`start`, `end`): [`Collection`](Collection.md)\<`K`, `V`\>

Returns a new Collection instance containing a subset of key-value pairs starting from the specified start index (inclusive) to the specified end index (exclusive).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The start index. |
| `end` | `number` | The end index. |

#### Returns

[`Collection`](Collection.md)\<`K`, `V`\>

A new Collection instance with the specified subset of key-value pairs.

#### Defined in

[collection.ts:758](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L758)

___

### values

▸ **values**(): `IterableIterator`\<`V`\>

#### Returns

`IterableIterator`\<`V`\>

an iterator that contains all the values of the elements in the collection.

#### Defined in

[collection.ts:325](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L325)

___

### with

▸ **with**(`index`, `value`): `undefined` \| [`Collection`](Collection.md)\<`K`, `V`\>

Returns a new Collection with the value at the specified index replaced.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the element to replace. |
| `value` | `V` | The new value to assign. |

#### Returns

`undefined` \| [`Collection`](Collection.md)\<`K`, `V`\>

A new Collection with the updated value.

#### Defined in

[collection.ts:723](https://github.com/telegramsjs/collection/blob/97d6745/src/collection.ts#L723)
