'use strict';

const LL = require('./lib/linkded-lists/linked_list.js');
const Stack = require('./lib/stacks-and-queues/stack.js');
const Queue = require('./lib/stacks-and-queues/queue.js');
const util = require("util");

let list = new LL();

list.append(1).append(2).append(3).prepend(4);
list.reverse();


// console.log(util.inspect(list, {showHidden: true, depth: null}));

function prettyPrint(LL) {
  let currentNode = LL.head;
  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}
// prettyPrint(list);

function recursivePrettyPrint(LL) {
  if (!LL) return;
  console.log(LL.value);
  recursivePrettyPrint(LL.next);
}

// recursivePrettyPrint(list.head);

function toArray(LL) {
  let array = [];
  let currentNode = LL.head;
  while (currentNode) {
    array[array.length] = currentNode.value;
    currentNode = currentNode.next;
  }
  return array;
}

// console.log(toArray(list));

function contains(list, value) {
  let currentNode = list.head;
  while (currentNode) {
    if (currentNode.value === value) return currentNode;
    currentNode = currentNode.next;
  }
}

// console.log(contains(list, 2));

function intersect(list1, list2) {
  let currentNode1 = list1.head;
  let nextNode1 = currentNode1.next;
  let currentNode2 = list2.head;
  let nextNode2 =currentNode1.next;

  let list = new LL();

  while(currentNode1 || currentNode2) {
    list.append(currentNode1.value);
    list.append(currentNode2.value);

    currentNode1 = currentNode1.next;

    currentNode2 = currentNode2.next;
  }
  return list;
}

let list23 = new LL();
list23.append(1).append(2).append(3);
let list25 = new LL();
list25.append(4).append(5).append(6);


// console.log(util.inspect(intersect(list23, list25), {showHidden: true, depth: null}));

function union(list1, list2) {
  let list = new LL();

  function appendTo(node) {
    while(node) {
      list.append(node.value);
      node = node.next;
    }
  }

  appendTo(list1.head);
  appendTo(list2.head);

  return list;
}

// console.log(util.inspect(union(list23, list25), { showHidden: true, depth: null }));

function splice(...args) {
  let list = args[0];
  let start = args[1];
  let deleteCount = args[2];
  let items = args.filter((x, i) => i > 2 );
  let newList = new LL();

  let currentNode = list.head;

  while(currentNode && start > 0) {
    newList.append(currentNode.value);
    currentNode = currentNode.next;
    start--;
  }
  if (items && items.length) {
    items.map(item => newList.append(item));
  }

  while(currentNode && deleteCount > 0) {
    currentNode = currentNode.next;
    deleteCount--;
  }

  while(currentNode) {
    newList.append(currentNode.value);
    currentNode = currentNode.next;
  }
  return newList;
}

// console.log(util.inspect(splice(list, 1, 0, 'banana', 'apple', 'orange'), {showHidden: true, depth:null}));

let demoList = new LL();
demoList.append('john').append('is').append('bald');

function reverse(linkedList) {
  let stack = new Stack();
  let currentNode = linkedList.head;
  
  while(currentNode) {
    stack.push(currentNode.value);
    currentNode = currentNode.next;
  }

  let list = new LL();
  while(stack.stack.length) {
    let value = stack.pop();
    list.append(value);
  }
  return list;
}
let reverseList = reverse(demoList);
// console.log(util.inspect(reverseList, { showHidden: true, depth: null }));











