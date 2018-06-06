'use strict';

const breadthFirst = require('../../../../lib/trees/challenge-02/breadth-first-traversal.js');
const BinaryTree = require('../../../../lib/trees/lib/binary_tree.js');
const Node = require('../../../../lib/trees/lib/node.js');

function constructTree() {
  let two = new Node(2),
    seven = new Node(7),
    secondtwo = new Node(2),
    six = new Node(6),
    five = new Node(5),
    eleven = new Node(11),
    secondfive = new Node(5),
    nine = new Node(9),
    four = new Node(4);

  let tree = new BinaryTree(two);

  two.left = seven;
  two.right = secondfive;
  seven.left = secondtwo;
  seven.right = six;
  six.left = five;
  six.right = eleven;
  secondfive.right = nine;
  nine.left = four;

  return tree;
}

describe('Breadth First Traversal', () => {
  
  it('when given no input, expect error to be thrown', () => {
    expect(() => {
      breadthFirst();
    }).toThrow();
  });

  it('when given a tree, expect to print out a breadth-first traversal', () => {
    let tree = constructTree();
    let traversal = breadthFirst(tree);

    expect(traversal.trim()).toBe('2\n7\n5\n2\n6\n9\n5\n11\n4');
  });

});