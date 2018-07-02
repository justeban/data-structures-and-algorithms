'use strict';

const Hashmap = require('../hashmap.js');

module.exports = function treeInt(tree1, tree2) { //eslint-disable-line
  let myHash = new Hashmap();
  let mySet = new Set();

  if (tree1 === undefined || tree2 === undefined) throw 'not a valid input';
  
  function _walk(node) {
    if (node.left) _walk(node.left);
    myHash.set(node.value);
    if (node.right) _walk(node.right);
  };

  _walk(tree1.root);
  _walk(tree2.root);

  Object.keys(myHash.map).map((key) => {
    if (myHash.map[key].size > 1) {
      let word = myHash.map[key].head.value.key;
      mySet.add(word);
    }
  });

  return mySet.size ? mySet : 'No Matches';
};