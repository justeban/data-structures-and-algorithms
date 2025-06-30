"use strict";

// Selection Sort is moving through the array and comparing each array to find the smallest index and place it 'i';
// then we continue to work through the array starting at the new 'i'

//  Time: O(n2) Space: O(1) no new memory created
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // i = 0
    let minIndex = i; // i = 0

    for (let j = i + 1; j < arr.length; j++) {
      // j = 3

      if (arr[j] < arr[minIndex]) {
        // 1
        minIndex = j; // 2
      }
    }

    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;

    console.log(arr[i], arr);
  }
};

console.log(selectionSort([2, 5, 1, 45, 12, 98, 37, 19]));
