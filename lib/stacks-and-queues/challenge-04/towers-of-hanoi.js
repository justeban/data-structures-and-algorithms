'use strict';

function towersOfHanoi(n) { // eslint-disable-line
  if ( !n || typeof(n) !== 'number' || n < 0) throw 'Not a Valid Input';
  if (n > 15) throw '...nope...not doing that...';
  let text = '';
  let start = 'A';
  let mid = 'B';
  let end = 'C';

  towerHanoi(n, start, end, mid);

  function towerHanoi(n, start, end, mid) {
    if (n === 0) {
      return;
    }
    towerHanoi(n - 1, start, mid, end);
    text = text + (`Move disc ${n} from ${start} to ${end}\n`);
    towerHanoi(n - 1, mid, end, start);
  }
  
  return text;
}

module.exports = towersOfHanoi;