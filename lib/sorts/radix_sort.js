'use strict';

module.exports = array => {
  let counter = [[]];
  let mod = 10;
  let dev = 1;
  let maxDigit = getLongestDigit(array);

  for (let i = 0; i < maxDigit; i++ , dev *= 10, mod *= 10) {
    for (let j = 0; j < array.length; j++) {

      let bucket = parseInt((array[j] % mod) / dev);

      if (counter[bucket] == null) {
        counter[bucket] = [];
      }

      counter[bucket].push(array[j]);
    }

    let pos = 0;

    for (let j = 0; j < counter.length; j++) {

      let value = null;

      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          array[pos++] = value;
        }
      }
    }
  }
  return array;
} 

let getLongestDigit = array => {
  let maxDigit = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i].toString().length > maxDigit) {
      maxDigit = array[i].toString().length;
    }
  }

  return maxDigit;
}