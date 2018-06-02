'use strict';

const util = require('util');

const BinaryTree = require('./lib/trees/lib/binary_tree.js');
const Node = require('./lib/trees/lib/node.js');

const one = new Node('F');
const two = new Node('B');
const three = new Node('G');
const four = new Node('D');
const five = new Node('I');
const six = new Node('A');
const seven = new Node('E');
const eight = new Node('C');
const nine = new Node('H');

const tree = new BinaryTree(one);

one.left = two; //
one.right = three; //
two.right = four;// 
three.right = five;//
two.left = six; //
four.right = seven;//
four.left = eight;
five.left = nine;

// console.log(tree);


console.log(util.inspect(tree, { showHidden: true, depth: null }));

console.log(tree.inOrder());