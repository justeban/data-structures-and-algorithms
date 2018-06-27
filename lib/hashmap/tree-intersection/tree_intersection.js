'use strict';

const Hashmap = require('../hashmap.js');

module.exports = function treeInt(tree1, tree2) { //eslint-disable-line
  let myHash = new Hashmap();
  let mySet = new Set();

  if (tree1 === undefined || tree2 === undefined) throw 'not a valid input';
  
  (function _walk(node) {
    if (node.left) _walk(node.left);
    myHash.set(node.value);

    if (node.right) _walk(node.right);
  })(tree1.root);

  (function _walk2(node) {
    if (node.left) _walk2(node.left);
    
    try {
      myHash.set(node.value);
    } 
    catch (err) {
      mySet.add(node.value);
    }

    if (node.right) _walk2(node.right);
  })(tree2.root);

  return mySet.size ? mySet : 'No Matches';
};