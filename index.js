'use strict';

const util = require('util');

const BinaryTree = require('./lib/trees/lib/binary_tree.js');
const Node = require('./lib/trees/lib/node.js');
const fizzBuzzTree = require('./lib/trees/challenge-01/fizzBuzzTree.js');

const one = new Node(1);
const two = new Node(3);
const three = new Node(6);
const four = new Node(15);
const five = new Node(8);
const six = new Node(10);
const seven = new Node(30);                                                                                                              
const eight = new Node(4);
const nine = new Node(19);

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

fizzBuzzTree(tree);
console.log(util.inspect(tree, {showHidden: true, depth: null}));