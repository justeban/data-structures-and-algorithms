'use strict';
const BinaryTree = require('../../../../lib/trees/lib/binary_tree.js');
const Node = require('../../../../lib/trees/lib/node.js');


describe('inOrder() of Binary Tree', () => {

  it('when run, should return a string', () => {
    const f = new Node('F');
    const b = new Node('B');
    const g = new Node('G');

    const tree = new BinaryTree(f);

    f.right = b;
    b.right = g;

    let value = tree.inOrder();
    expect(typeof(value)).toBe('string');
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
