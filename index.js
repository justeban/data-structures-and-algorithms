'use strict';

const util = require('util');

const Hashmap = require('./lib/hashmap/hashmap.js');

let myhash = new Hashmap(0);


myhash.set('Dezi', 'Dog');
myhash.set('Doug', 'Dog');
myhash.set('Demi', 'Dog');
myhash.update('Demi', 'Cat');
// myhash.set('Dezi');
// console.log(util.inspect(myhash, {showHidden: true, depth: null}));

// myhash.delete('Demi');
console.log(util.inspect(myhash, { showHidden: true, depth: null }));

// console.log(myhash.delete('Dezi'));
// console.log(myhash.set('Dezi', 'Cat'));
let data = myhash.serialize();

// let newHash = new Hashmap(0);
console.log(data);
// console.log(newHash.deserialize(data));

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

let tree = new KAryTree(j);

console.log(util.inspect(tree, {showHidden: true, depth: null}));

console.log(tree.breadthFirstTraversal());
console.log(tree.depthFirstTraversal());