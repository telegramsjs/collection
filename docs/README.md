@telegram.ts/collection / [Exports](modules.md)

# @telegram.ts/collection

[![NPM Version](https://img.shields.io/npm/v/@telegram.ts/collection)](https://www.npmjs.com/package/@telegram.ts/collection)
[![Bot API](https://img.shields.io/badge/Bot%20API-v.7.1-00aced.svg?style=flat-square&logo=telegram)](https://core.telegram.org/bots/api)
[![NPM Downloads](https://img.shields.io/npm/dt/@telegram.ts/collection.svg?maxAge=3600)](https://www.npmjs.com/package/@telegram.ts/collection)
[![License](https://img.shields.io/npm/l/@telegram.ts/collection)](https://github.com/telegramsjs/plugins/blob/main/LICENSE)

`@telegram.ts/collection` is a TypeScript library that provides a collection of utility classes and functions for managing collections of data. It offers a set of data structures optimized for various use cases, such as managing lists, maps, and sets efficiently.

## Features
- **Typed Collections:** Benefit from TypeScript's type system with fully typed collections.
- **Efficient Data Management:** Efficiently manage collections of data with optimized data structures.
- **Versatile Functionality:** Access a wide range of utility functions for manipulating collections.

## Installation
You can install `@telegram.ts/collection` via npm or yarn:

```bash
npm install @telegram.ts/collection
# or
yarn add @telegram.ts/collection
```

## Usage
```typescript
import { Collection } from '@telegram.ts/collection';

// Create a new collection
const myCollection = new Collection<string, number>();

// Add items to the collection
myCollection.set('key1', 1);
myCollection.set('key2', 2);

// Retrieve an item from the collection
const value = myCollection.get('key1');
console.log(value); // Output: 1

// Iterate over the collection
myCollection.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/telegramsjs/collection/blob/main/LICENSE) file for details.
