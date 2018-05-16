'use strict';

let insertShiftArray = require('../../../lib/array-data-structures/array_binary_search.js');

describe('Array Binary Search', () => {
  it('insertShiftArray([1,2,3,4], 8)', () => {
    let searchResults = insertShiftArray([1, 2, 3, 4], 8);
    expect(searchResults).toEqual(-1);
  });

  it('insertShiftArray([1,17,26,58], -2)', () => {
    let searchResults = insertShiftArray([1, 17, 26, 58], -2);
    expect(searchResults).toEqual(-1);
  });

  it('insertShiftArray([1,2,3,4], 4)', () => {
    let searchResults = insertShiftArray([1, 2, 3, 4], 4);
    expect(searchResults).toEqual(3);
  });
});

