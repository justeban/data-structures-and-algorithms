'use strct';

const BinaryTree = require('../../../../lib/trees/lib/binary_tree.js');
const Node = require('../../../../lib/trees/lib/node.js');
const fizzBuzzTree = require('../../../../lib/trees/challenge-01/fizzBuzzTree.js');

let constructTree = () => {
  const one = new Node(1);
  const two = new Node(3);
  const three = new Node(6);
  const four = new Node(15);
  const five = new Node(8);
  const six = new Node(10);
  const seven = new Node(30);
  const eight = new Node(4);
  const nine = new Node(19);

  const tree = new BinaryTree(one);

  one.left = two;
  one.right = three;
  two.right = four; 
  three.right = five;
  two.left = six; 
  four.right = seven;
  four.left = eight;
  five.left = nine;

  return tree;
};

describe('FizzBuzz Tree', () => {
  it('When given a tree it should return "Fizz" for values divisible by 3', () => {
    let tree = constructTree();
    fizzBuzzTree(tree);
    expect(tree.root.left.value).toBe('Fizz');
    expect(tree.root.right.value).toBe('Fizz');
  });
  it('When given a tree it should return "Buzz" for divisible by 5', () => {
    let tree = constructTree();
    fizzBuzzTree(tree);
    expect(tree.root.left.left.value).toBe('Buzz');
  });
  it('When given a tree, expect it to return "FizzBuzz" where value is divisible by both 5 and 3', () => {
    let tree = constructTree();
    fizzBuzzTree(tree);
    expect(tree.root.left.right.value).toBe('FizzBuzz');
    expect(tree.root.left.right.right.value).toBe('FizzBuzz');
  });
});
