'use strict';

const Stack = require('./lib/stacks-and-queues/stack.js');

let stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));

console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
