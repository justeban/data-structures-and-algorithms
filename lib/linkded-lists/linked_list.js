'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {

    let node = new Node(value);

    if(!(this.head)) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
    
      currentNode.next = node;

      return this;
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  reverse() {
    let currentNode = this.head;
    let nextNode = null;
    let prevNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.head = prevNode;

    return this;
  }
}

module.exports = LinkedList;

