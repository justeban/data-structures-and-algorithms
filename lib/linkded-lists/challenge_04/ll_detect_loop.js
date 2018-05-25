'use strict';

function hasLoop() { // eslint-disable-line
  let fastNode = this.head;
  let slowNode = this.head;
  let moveSlow = false;
  fastNode = fastNode.next;

  while ( fastNode !== slowNode ) {
    if (fastNode) {
      if (moveSlow) {
        slowNode = slowNode.next;
        fastNode = fastNode.next;
        moveSlow = false;
      } else {
        fastNode = fastNode.next;
        moveSlow = true;
      }
    } else {
      return false;
    }
  }
  return true;
}

