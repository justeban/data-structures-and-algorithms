'use strict';

const Hashmap = require('../hashmap.js');

module.exports = function treeInt(tree1, tree2) { //eslint-disable-line
  let myHash = new Hashmap();
  let mySet = new Set();

  (function _walk(node) {
    if (node.left) _walk(node.left);
    myHash.set(node.value);

    if (node.right) _walk(node.right);
  })(tree1.root);

  (function _walk2(node) {
    if (node.left) _walk2(node.left);
    try {
      myHash.set(node.value);
    } catch {
      mySet.add(node.value);
    }
    if (node.right) _walk2(node.right);
  })(tree2.root);

  return mySet.values ? mySet : 'No Matches';
};