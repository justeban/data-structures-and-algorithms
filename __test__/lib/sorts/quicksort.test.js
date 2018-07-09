'use strict';

const quicksort = require('../../../lib/sorts/quicksort.js');

describe('QUICKSORT', () => {
  it('expect to throw error when input is not an array', () => {
    expect(() => {
      quicksort({});
    }).toThrow();
  });
  it('expect to properly sort negative numbers', () => {
    let value = quicksort([-2, -12, -25, -5, -7]);
    expect(value).toEqual([-25, -12, -7, -5, -2]);
  })
  it('expect to properly sort given a mix of positive and negative numbers', () => {
    let value = quicksort([1,-4, 12, 45, -37, -14, 28]);
    expect(value).toEqual([-37, -14, -4, 1, 12, 28, 45]);
  });
});