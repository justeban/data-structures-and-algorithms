'use strict';

const  towersOfHanoi = require('../../../../lib/stacks-and-queues/challenge-04/towers-of-hanoi.js');

describe('Towers of Hanoi', () => {
  it('when given no input, should return error', () => {
    expect(() => {
      towersOfHanoi();
    }).toThrowError('Not a Valid Input');
  });

  it('when given any valid input, should return a string', () => {
    let directions = towersOfHanoi(1);
    expect(directions.trim()).toBe('Move disc 1 from A to C');
  });

  it('when given an input over 15, expect error to be thrown', () => {
    expect(() => {
      towersOfHanoi(28);
    }).toThrowError('...nope...not doing that..');
  });
});