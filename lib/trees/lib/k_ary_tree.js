'use strict';

const Queue = require('../../stacks-and-queues/queue.js');
const Stack = require('../../stacks-and-queues/stack.js');

class KAryTree {
  
  constructor(root) {
    this.root = root;
  }

  breadthFirstTraversal() {

    if (!this.root) {
      return null;
    }

    return this.breadthFirstTraversalHelper(this.root);
  }

  breadthFirstTraversalHelper(root) {

    let queue = new Queue();
    queue.enqueue(root);

    let text = '';

    while ( queue.queue.length !== 0 ) {
      let currentNode = queue.dequeue();
      currentNode.children.map(child => queue.enqueue(child));
      text = text + currentNode.value + ' ';
    }

    return text.trim();
  }

  depthFirstTraversal() {
    if (!this.root) {
      return null;
    }
    return this.depthFirstTraversalHelper(this.root);
  }

  depthFirstTraversalHelper(root) {
    let stack = new Stack();
    stack.push(root);

    let text = '';

    while (stack.stack.length !== 0){
      let currentNode = stack.pop();
      currentNode.children.map(child => stack.push(child));
      text = text + currentNode.value + ' ';
    }
    return text.trim();
  }
}

module.exports = KAryTree;