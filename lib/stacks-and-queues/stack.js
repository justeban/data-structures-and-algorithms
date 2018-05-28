'use strict';

class Stack {

  constructor() {
    this.stack = new Array();
  }

  push(value) {
    if(this.stack.length) {
      for (let i = this.stack.length - 1; i >= 0; i--) {
        this.stack[i+1] = this.stack[i];
      }
    }
    this.stack[0] = value;
    return this;
  }

  pop() {
    if(!this.stack.length) {
      throw 'Stack is Empty';
    }
    let value = this.stack[0];
    this.stack.splice(0,1);
    return value;
  }
  serialize() {
    return JSON.stringify(this.stack);
  }
  deserialize(value) {
    let stack = JSON.parse(value).reverse();
    stack.forEach((el) => {
      this.push(el);
    });
    return this;
  }
}

module.exports = Stack;