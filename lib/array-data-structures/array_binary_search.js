'use strict';

const binarySearch = function(arr, sk) {
  let left = 0;
  let right = arr.length - 1;
  let middle = 0;

  while( arr[middle] !== sk ) {
    if (left > right) {
      return -1;
    }

    middle = Math.floor((left + right) / 2);
    
    if (arr[middle] < sk) {
      left = middle + 1;
    } else if (arr[middle] > sk) {
      right = middle - 1;
    } 
  }
  return middle;
}

module.exports = binarySearch;