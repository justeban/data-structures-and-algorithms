'use strict';

module.exports = (arr) => {

  if (!(arr instanceof Array)) throw 'invalid input';

  if (arr.length == 0) {
    return [];
  }

  let left = [];
  let right = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left[left.length] = arr[i];
    } else {
      right[right.length] = arr[i];
    }
  }
  return module.exports(left).concat(pivot, module.exports(right));
}