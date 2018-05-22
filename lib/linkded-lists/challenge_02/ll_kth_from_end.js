'use strict';

let nthFromEnd = (input) => {
  let counter = 0; 
  let currentNode = this.head;
  let nextNode = null;

  while (currentNode.next) {
    currentNode = currentNode.next;
    counter++;
  }

  let toTraverse = counter - input;

  if ( toTraverse === 0 ) this.head;
  else if ( toTraverse < 0 ) null;
  else {
    counter = 0; 
    currentNode = this.head;

    while ( counter < toTraverse ) {
      currentNode = currentNode.next; 
      counter++;
    }
    return currentNode;
  }
};

module.exports = nthFromEnd;