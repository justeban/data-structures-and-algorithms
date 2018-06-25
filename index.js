'use strict';

const util = require('util');

const KAryTree = require('./lib/trees/lib/k_ary_tree.js');
const KAryNode = require('./lib/trees/lib/k_ary_node.js');

let j = new KAryNode('J');
j.appendChild('O');
j.appendChild('H');
j.appendChild('N');

j.children[0].appendChild('I');
j.children[0].appendChild('S');

j.children[0].children[1].appendChild('B');
j.children[0].children[1].appendChild('A');
j.children[0].children[1].appendChild('L');
j.children[0].children[1].appendChild('D');


// console.log(util.inspect(j, { showHidden: true, depth: null }));

let tree = new KAryTree(j);
let breadthTraversed = tree.breadthFirstTraversal();
let depthTraversed = tree.depthFirstTraversal();

console.log('Breadth: ', breadthTraversed);
console.log('Depth: ', depthTraversed);