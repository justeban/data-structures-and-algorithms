'use strict';

const Stack = require('../stack.js');
const Queue = require('../queue.js');

let stack1 = new Stack;
let stack2 = new Stack;

Queue.prototype.enqueue2 = function(value) {
  let stack1 = this.queue || new Stack;
  this.queue = stack1.stack;
  stack1.push(value);
  return this;
};

Queue.prototype.dequeue2 = function() {
  let stack1 = new Stack;
  let stack2 = new Stack;

  while(this.queue.length !==1) {
    stack2.push(stack1.pop());
  }

  let returned = stack1.pop();
  
  while(stack2.stack.length > 0) {
    stack1.push(stack2.pop());
  }

  return returned;
};

module.exports = Queue;

