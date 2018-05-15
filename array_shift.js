'use strict';

const insertShiftArray = function(arr, v) {
  let mIndex = Math.ceil(arr.length / 2);
  let k = 0;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (k === mIndex) {
      newArr[k] = v;
      k++;
    }
    newArr[k] = arr[i];
    k++;
  }
  return newArr;
};

module.exports = insertShiftArray;