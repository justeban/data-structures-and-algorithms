'use strict';

const radixSort = require('../../../lib/sorts/radix_sort.js');

describe('RADIX SORT', () => {
  it('if input not an array expect to throw error', () => {
    expect(() => {
      radixSort({});
    }).toThrowError();
  });
  
  it('check to make sure an array of positive integers', () => {
    expect(() => {
      radixSort([2, 3, 4, -5, 3]);
    }).toThrow();
  });

  it('with proper input, should return sorted array in ascending order', () => {
    let value = radixSort([4,2,7,4,9,1]);
    expect(value).toEqual([1, 2, 4, 4, 7, 9]);
  })
});