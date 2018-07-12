'use strict';

const LL = require('./lib/linkded-lists/linked_list.js');
const Stack = require('./lib/stacks-and-queues/stack.js');
const Queue = require('./lib/stacks-and-queues/queue.js');
const BST = require('./lib/trees/lib/binary_search_tree.js');
const Node = require('./lib/trees/lib/node.js');
const mergesort = require('./lib/sorts/mergesort.js');
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

// BINARY SEARCH TREE

let bst = new BST();
let randNums = [58, 79, 8, -6, 12, 56, 93, 68, 16, 49, 50 , 100, 83, 85, 99, , 495, 376, 405, 205, 500, 700];

randNums.map(item => {
  return bst.insert(item);
});

// bst.remove(58);

// console.log(util.inspect(bst, { showHidden: true, depth: null }));

let findValueBST = (value, bst) => {
  let currentNode = bst.root;
  while (currentNode) {
    if (value < currentNode.value) {
      currentNode = currentNode.left;
    } else if (value > currentNode.value) {
      currentNode = currentNode.right;
    } else if (value === currentNode.value){
      return currentNode;
    }
  }
  return undefined;
}

// console.log(findValueBST(69, bst));

let sumOfBST = (bst) => {
  let accum = 0;
  
  let _walk = (node) => {
    if (node.left) {_walk(node.left)}
    accum += node.value;
    if (node.right) {_walk(node.right)}
  }
  _walk(bst.root);

  return accum;
}

// console.log(sumOfBST(bst));

let bst2 = new BST();
let values = [9, 4, 17, 3, 6, 22, 5, 7, 20];
// console.log(values);

values.map((val, i) => {
  return bst2.insert(val);
})
// console.log(util.inspect(bst2, {showHidden: true, depth: null}));

function findLeaves(tree) {
  let currentNode = tree.root;
  let leaves = [];

  let _walk = (node) => {
    if (node.left) {_walk(node.left);}
    if (!node.left && !node.right) {leaves[leaves.length] = node.value;}
    if (node.right) {_walk(node.right);}
  }
  _walk(tree.root);
  return leaves;
}
let leaves = findLeaves(bst2);


function findMinHeight(tree) {

  let minHeight = (node) => {
    if (node === null) { return 0; }
    let left = minHeight(node.left);
    let right = minHeight(node.right);

    if ( left < right ) { return left + 1 }
    else {return right + 1}
  }
  return minHeight(tree.root);
}


let inOrderArray = bst.inOrder().split(',');
// console.log(inOrderArray);

function fromArray(array) {

  let createTree = (left, right) => {
    
    let mid = Math.floor((left + right)/2);

    if (right < 0 || left > mid || !array[mid]) { return null; }
    
    let root = new Node(array[mid]);

    root.left = createTree(left, mid-1);
    root.right = createTree(mid+1, right);

    return root;

  };

  let bst = new BST(createTree(0, array.length));
  return bst;
}

let ree = fromArray(inOrderArray);
// console.log(ree.isBalanced());

// console.log(util.inspect(fromArray(inOrderArray), {showHidden: true, depth: null}));

let array56 = [3, 21, -4, 18, 12, 8, 45, 7];

console.log(mergesort(array56));