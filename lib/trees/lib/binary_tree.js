'use strict';

module.exports = class BinaryTree {

  constructor(root = null) {
    this.root = root;
  }

  inOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      results.push(node.value);
      if(node.right) { _walk(node.right); }
    };
    _walk(this.root);
    
    return results.toString();
  }
};