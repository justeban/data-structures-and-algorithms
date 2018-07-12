'use strict';
const BinaryTree = require('../../../../lib/trees/lib/binary_tree.js');
const Node = require('../../../../lib/trees/lib/node.js');

describe('BINARY TREE', () => {
  describe('inOrder()', () => {

    it('when run, should return a string', () => {
      const f = new Node('F');
      const b = new Node('B');
      const g = new Node('G');

      const tree = new BinaryTree(f);

      f.right = b;
      b.right = g;

      let value = tree.inOrder();
      expect(typeof (value)).toBe('string');
    });

    it('when run, expect inOrder results', () => {
      const f = new Node('F');
      const b = new Node('B');
      const g = new Node('G');
      const d = new Node('D');
      const i = new Node('I');
      const a = new Node('A');
      const e = new Node('E');
      const c = new Node('C');
      const h = new Node('H');

      const tree = new BinaryTree(f);

      f.left = b;
      f.right = g;
      b.right = d;
      g.right = i;
      b.left = a;
      d.right = e;
      d.left = c;
      i.left = h;

      let value = tree.inOrder();
      expect(value).toBe('A,B,C,D,E,F,G,H,I');
    });

    it('when tree consists of only right properties it should still function properly', () => {
      const f = new Node('F');
      const b = new Node('B');
      const g = new Node('G');
      const d = new Node('D');
      const i = new Node('I');
      const a = new Node('A');
      const e = new Node('E');
      const c = new Node('C');
      const h = new Node('H');

      const tree = new BinaryTree(f);

      f.right = b;
      b.right = g;
      g.right = d;
      d.right = i;
      i.right = a;
      a.right = e;
      e.right = c;
      c.right = h;

      let value = tree.inOrder();
      expect(value).toBeDefined();
    });
  });

  describe('preOrder()', () => {
    it('expect to return a string in preOrder', () => {

      const f = new Node('F');
      const b = new Node('B');
      const g = new Node('G');
      const d = new Node('D');
      const i = new Node('I');
      const a = new Node('A');
      const e = new Node('E');
      const c = new Node('C');
      const h = new Node('H');

      const tree = new BinaryTree(f);

      f.left = b;
      f.right = g;
      b.right = d;
      g.right = i;
      b.left = a;
      d.right = e;
      d.left = c;
      i.left = h;

      let value = tree.preOrder();
      expect(value).toEqual('F,B,A,D,C,E,G,I,H');
    });
  });
  describe('postOrder', () => {
    it('expect to print string in postOrder', () => {
      const f = new Node('F');
      const b = new Node('B');
      const g = new Node('G');
      const d = new Node('D');
      const i = new Node('I');
      const a = new Node('A');
      const e = new Node('E');
      const c = new Node('C');
      const h = new Node('H');

      const tree = new BinaryTree(f);

      f.left = b;
      f.right = g;
      b.right = d;
      g.right = i;
      b.left = a;
      d.right = e;
      d.left = c;
      i.left = h;

      let value = tree.postOrder();
      expect(value).toEqual('A,C,E,D,B,H,I,G,F');
    });
  });
});

