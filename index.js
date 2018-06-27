'use strict';

const util = require('util');

const treeInt = require('./lib/hashmap/tree-intersection/tree_intersection.js');
// const Hashmap = require('./lib/hashmap/hashmap.js');

const BinaryTree = require('./lib/trees/lib/binary_tree.js');
const BinaryNode = require('./lib/trees/lib/node.js');

let node1 = new BinaryNode(100);
let node2 = new BinaryNode('yellow');
let node3 = new BinaryNode(300);
let node4 = new BinaryNode(400);
let node5 = new BinaryNode('DOG');

node1.left = node2;
node1.right = node3;
node3.right = node4;
node4.right = node5;

let bTree1 = new BinaryTree(node1);

let node6 = new BinaryNode(100);
let node7 = new BinaryNode('yellow');
let node8 = new BinaryNode(800);
let node9 = new BinaryNode('DOG');
let node10 = new BinaryNode(1000);

node6.left = node7;
node7.left = node8;
node7.right = node9;
node9.right = node10;

let bTree2 = new BinaryTree(node6);




// console.log(util.inspect(bTree, {showHidden: true, depth: null}));

let value = treeInt(bTree1, bTree2);

console.log(value);