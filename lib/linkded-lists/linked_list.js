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

  remove(offset) {

    if( typeof offset !== 'number' ) {
      throw 'Parameter is not a number';
    }

    if ( offset < 0 ) {
      throw 'negative integers not allowed';
    }

    let counter = 0; 
    let currentNode = this.head;
    let nextNode = currentNode.next;
    let prevNode = null;

    while(counter !== offset) {
      if (!currentNode.next) {
        throw 'offset greater than length of linked list';
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
      nextNode = currentNode.next;
      counter++; 
    }

    if (this.head === currentNode) {
      this.head.next = null;
      this.head = nextNode;
    } else {
      currentNode.next = null;
      prevNode.next = nextNode;
    }

    return this;
  }
  
  serialize() {
    let nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    
    if(!nodes.length) {throw 'list has no nodes';}

    return JSON.stringify(nodes);
  }

  deserialize(jsonstring) {
    if(!jsonstring) { throw 'parameter was empty'; }
    let data = JSON.parse(jsonstring);

    for (let i = 0; i < data.length; i++) {
      this.append(data[i]);
    }
    return this;
  }
}

module.exports = LinkedList;

