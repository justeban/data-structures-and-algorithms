'use strict';

const Node = require('../lib/node.js');

module.exports = class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  inOrder() {
    let results = [];

    let _walk = (node) => {
      if (node.left) { _walk(node.left); }
      results.push(node.value);
      if (node.right) { _walk(node.right); }
    };
    _walk(this.root);

    return results.toString();
  }

  insert(value) {

    const node = this.root;

    if (!node) {
      this.root = new Node(value);
      return;
    }

    let _insert = (node) => {
      if (value < node.value) {

        if (node.left === null) {
          node.left = new Node(value);
          return;
        } else if (node.left !== null) {
          return _insert(node.left);
        }

      } else if (value >= node.value) {

        if (node.right === null) {
          node.right = new Node(value);
          return;
        } else if (node.right !== null) {
          return _insert(node.right);
        }

      } else {
        return null;
      }
    }
    _insert(node);
  }

  remove(value) {

    const removeNode = function(node, value) {
      if (node === null) {
        return null;
      }
      if (value === node.value) {

        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value
        node.right = removeNode(node.right, tempNode.value);
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    }
    this.root = removeNode(this.root, value);
  }
  
  isBalanced(node = this.root) {
    return (this.minHeight() >= (this.maxHeight() - 1));
  }

  minHeight(node = this.root) {

    if (node === null) { return -1; }

    let left = this.minHeight(node.left);
    let right = this.minHeight(node.right);

    if (left < right) { return left + 1; }
    else { return right + 1; };

  }

  maxHeight(node = this.root) {

    if (node === null) { return -1; }

    let left = this.maxHeight(node.left);
    let right = this.maxHeight(node.right);

    if (left > right) { return left + 1; }
    else { return right + 1; };

  }
}