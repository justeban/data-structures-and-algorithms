'use strict';

const util = require('util');

const BST = require('../../../../lib/trees/lib/binary_search_tree.js');

describe('BINARY SEARCH TREE', () => {
  describe('insert(value)', () => {
    it('when tree has no root, expect insert to assign value to root', () => {
      let bst = new BST();
      bst.insert(45);
      expect(bst.root.value).toBe(45);
    });
    it('when values exist, expect to insert value on left if lesser and right if greater', () => {
      let bst = new BST();
      bst.insert(45);
      bst.insert(37);
      bst.insert(63);
      expect(bst.root.value).toBe(45);
      expect(bst.root.left.value).toBe(37);
      expect(bst.root.right.value).toBe(63);
    });
    it('expect to handle any number of inserts', () => {
      let bst = new BST();
      let randNums = [58, 78, 8, 7, 12, 56, 93, 68, 16, 49];

      randNums.map(item => bst.insert(item));

      let nums = [];

      let _walk = (node) => {
        if (node.left) {_walk(node.left)}
        nums.push(node.value);
        if (node.right) {_walk(node.right)}
      };
      _walk(bst.root);

      expect(nums.length).toEqual(randNums.length);
    });
  });
});