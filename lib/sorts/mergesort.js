'use strict';

let mergesort = (array) => {

  if (!array) { return undefined; }

  if (array.length === 1) {
    return array;
  }
  
  let mid = Math.floor(array.length/2);

  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergesort(left), mergesort(right));
}

let merge = (left, right) => {

  let results = [];

  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      results.push(left[leftIdx]);
      leftIdx++;
    } else {
      results.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return results.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

module.exports = mergesort;