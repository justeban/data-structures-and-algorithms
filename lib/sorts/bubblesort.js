// Complexity Analysis of Bubble Sort:
// Time Complexity: O(n2)
// Auxiliary Space: O(1)
// Please refer Complexity Analysis of Bubble Sort for details.

// Advantages of Bubble Sort:

// Bubble sort is easy to understand and implement.
// It does not require any additional memory space.
// It is a stable sorting algorithm, meaning that elements with the same key value maintain their relative order in the sorted output.

// Disadvantages of Bubble Sort:

// Bubble sort has a time complexity of O(n2) which makes it very slow for large data sets.
// Bubble sort has almost no or limited real world applications. It is mostly used in academics to teach different ways of sorting.

// Works by placing the largest element first by swapping elements until it gets to position

// [2, 5, 1, 45, 12, 98, 37, 19]

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    // we subtract i because when we get through another iteration another number is sorted at the end
    for (let j = 0; j < arr.length - i; j++) {
      let currentItem = arr[j];
      let nextItem = arr[j + 1];

      if (currentItem > nextItem) {
        let temp = nextItem;
        arr[j + 1] = currentItem;
        arr[j] = nextItem;
        swapped = true;

        console.log(`${arr[j + 1]} -> ${arr[j]}`, arr);
      }
    }

    // if not swapped it means we are all sorted
    if (!swapped) {
      break;
    }
  }
  return arr;
};

console.log(bubbleSort([2, 5, 1, 45, 12, 98, 37, 19]));
