'use strict';

let largestProduct = require('../../../lib/array-data-structures/array_adjacent_product.js');

describe('Array Binary Search', () => {
  it('largestproduct(), if given invalid argument should return error', () => {
    let results = largestProduct('anything else');
    expect(results).toEqual('Not Valid Array');
  });

  it('largestproduct(), when run should return greatest product of adjacent numbers ', () => {
    let results = largestProduct([[1, 2, 3], [8, 2, 5], [4, 1, 9]]);
    expect(results).toEqual(45);
  });

  it('largestproduct(), when run, should return greatest product if given a 2D array of any size', () => {
    let results = largestProduct([[1, 2, 3, 5], [8, 2, 5, 5], [4, 1, 9, 8], [8, 10, 11, 3]]);
    expect(results).toEqual(110);
  });
});