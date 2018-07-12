'use strict';

const mergesort = require('../../../lib/sorts/mergesort.js');

describe('MERGESORT', () => {
  
  it('when given no array expect to return undefinded', () => {
    let value = mergesort();
    expect(value).toBeUndefined();
  });

  it('when given proper input expect to sort array in ascending order', () => {
    let array = [3, 21, -4, 18, 12, 8, 45, 7];
    let sorted = mergesort(array);
    expect(sorted).toEqual([-4, 3, 7, 8, 12, 18, 21, 45]);
  });

  it('expect to work with whole range of numbers', () => {
    let array = [-100, -2.4, -5, 10, 367, 1.8, 9.45];
    let sorted = mergesort(array);
    expect(sorted).toEqual([-100, -5, -2.4, 1.8, 9.45, 10, 367])
  });

});