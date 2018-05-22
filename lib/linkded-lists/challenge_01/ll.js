'use strict';

const Node = require('./node.js');

class List {

  constructor() {
    this.head = null;
  }

  append(value) {
    let currentNode = this.head;
    let newNode = new Node(value);

    if(!currentNode) {
      this.head = newNode;
      return this;
    }

    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;

    return this;
  }

  insertBefore(value, newVal) {
    let currentNode = this.head;
    let prevNode = null;
    let newNode = new Node(newVal);

    while(currentNode.value !== value) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = newNode;
    newNode.next = currentNode;

    return this;
  }

  insertAfter(value, newVal) {
    let currentNode = this.head;
    let newNode = new Node(newVal);
    let nextNode = null;

    while(currentNode.value !== value) {
      currentNode = currentNode.next;
      nextNode = currentNode.next;
    }

    currentNode.next = newNode;
    newNode.next = nextNode;

    return this;
  }

}

module.exports = List;