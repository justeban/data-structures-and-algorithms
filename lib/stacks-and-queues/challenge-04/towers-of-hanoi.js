'use strict';

function towersOfHanoi(n) {
  let text = '';
  let start = 'A';
  let mid = 'B';
  let end = 'C';

  function towerHanoi(n, start, end, mid) {
    console.log('n is: ', n, 'start is : ', start, 'end: ', end, 'AuxPole is: ', mid);
    if (n === 0) {
      return;
    }
    towerHanoi(n - 1, start, mid, end);
    console.log(`Move disc ${n} from ${start} to ${end}\n`);
    towerHanoi(n - 1, mid, end, start);
  }

  towerHanoi(n, start, end, mid);

  return text;
}


console.log(towersOfHanoi(3, 'A', 'C', 'B'));