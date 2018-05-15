'use strict';

let insertShiftArray = require('../../array_shift.js');

describe('Array Shift', () => {
  it('insertShiftArray([1,2,3,4], 7)', () => {
    let newArray = insertShiftArray([1,2,3,4], 7);
    expect(newArray).toEqual([1,2,7,3,4]);
  });

  it('insertShiftArray([\'Justin\', \'Ben\', \'Jason\', \'Jennifer\'], \'Timea\')', () => {
    let newArray = insertShiftArray(['Justin', 'Ben', 'Jason', 'Jennifer', 'Coolio', 'Ludacris'], 'Timea');
    expect(newArray).toEqual(['Justin', 'Ben', 'Jason','Timea', 'Jennifer', 'Coolio', 'Ludacris']);
  });

  it('insertShiftArray([\'#\', \'$\', 567, \'Butterfly\', false,  \'*&\', 2], \'This is Fun\')', () => {
    let newArray = insertShiftArray(['#', '$', 567, 'Butterfly', false, '*&', 2], 'This is Fun');
    expect(newArray).toEqual(['#', '$', 567, 'Butterfly', 'This is Fun', false, '*&', 2]);
  });
});

