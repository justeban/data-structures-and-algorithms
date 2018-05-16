'use strict';

// Solution 1 

reverseArray = (arr) => { //eslint-disable-line
  let newArray = [];
  let k = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    newArray[k] = arr[i];
    k++;
  }
  return newArray;
};

// Solution 2 

reverseArray = (arr) => { // eslint-disable-line
  let i = arr.length - 1;
  let k = 0;
  let newArray = [];

  while (arr[i] !== undefined) {
    newArray[k] = arr[i];
    k++;
    i--;
  }
  return newArray;
};