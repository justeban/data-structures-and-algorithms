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

  nthFromEnd(input) {
    let counter = 0;
    let currentNode = this.head;
    let nextNode = null;

    while (currentNode.next) {
      currentNode = currentNode.next;
      counter++;
    }

    let toTraverse = counter - input;

    if (toTraverse === 0){
      return this.head;
    } else if (toTraverse < 0) {
      return null;
    } else {
      counter = 0;
      currentNode = this.head;

      while (counter < toTraverse) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  };

}

module.exports = List;