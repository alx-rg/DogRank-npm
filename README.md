# Dog Rank

![npm version](https://img.shields.io/npm/v/dog-ranking)
![npm downloads](https://img.shields.io/npm/dw/%40alxrg/dog-ranking)
![npm bundle size](https://img.shields.io/bundlephobia/min/dog-ranking)

A very simple node module that takes in a dog breed and returns to you their ranking based on the 2016 AKC DataSet.

## NPM Package available:

[Dog Ranking](https://www.npmjs.com/package/dog-ranking)

## How to Install the npm package:

Install via npm:

```bash
npm install dog-ranking
```

## Usage

Require the dog breed module into your file:

```bash
const dog = require('queryDogBreed')
```

Then utilize the `queryDogBreed` function provided by the module:

```bash
 // Looking for Poodle?
 queryDogBreed('pood', (result) => {
   console.log(result);
 });

// Not sure how to spell Alaska?
 queryDogBreed('alas', (result) => {
   console.log(result);
 });

// Spani will give you a bunch of results!
 queryDogBreed('spani', (result) => {
   console.log(result);
 });

```

Expected Output:

```bash
Here is your search for pood:
Poodles is ranked 7.

Here is your search for alas:
Alaskan Malamutes is ranked 59.

Here is your search for spani:
Cavalier King Charles Spaniels is ranked 19.
Spaniels (English Springer) is ranked 26.
Spaniels (Cocker) is ranked 29.
Spaniels (English Cocker) is ranked 56.
Spaniels (Boykin) is ranked 110.
Tibetan Spaniels is ranked 118.
Spaniels (Welsh Springer) is ranked 123.
English Toy Spaniels is ranked 130.
Spaniels (Clumber) is ranked 140.
Spaniels (Field) is ranked 141.
Spaniels (Sussex) is ranked 144.
American Water Spaniels is ranked 158.
Spaniels (American Water) is ranked 160.
Spaniels (Irish Water) is ranked 163.
Spaniels (Welsh Corgi) is ranked 179.

```
