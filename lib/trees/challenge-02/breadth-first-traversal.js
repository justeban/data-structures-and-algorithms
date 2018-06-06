'use strict';

const Queue = require('../../stacks-and-queues/queue.js');

module.exports = (tree) => {

  if (!tree) throw 'Not a Valid Input';
  
  let queue = new Queue();
  let tempNode = tree.root;
  let text = '';
  
  while (tempNode) {
    let str = tempNode.value.toString();
    text = text + str + '\n'; 
    
    if (tempNode.left) queue.enqueue(tempNode.left);
    if (tempNode.right) queue.enqueue(tempNode.right);
    if(queue.queue.length) {
      tempNode = queue.dequeue();
    } else {
      break;
    }
  }
  return text;
};



