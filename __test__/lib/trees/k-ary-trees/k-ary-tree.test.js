'use strict';

const KAryTree = require('../../../../lib/trees/lib/k_ary_tree.js');
const KAryNode = require('../../../../lib/trees/lib/k_ary_node.js');

describe('K-Ary Node Test', () => {
  it('expect KAryNode constructor to return new instance', () => {
    let node = new KAryNode();
    expect(node).toBeInstanceOf(KAryNode);
  });
});

describe('K-Ary Tree Test', () => {

  it('expect constructor to return new instance of tree', () => {
    let tree = new KAryTree();
    expect(tree).toBeInstanceOf(KAryTree);
  });

  it('breadthFirstTraversal(), with no root value given, should return null', () => {
    let tree = new KAryTree();
    expect(tree.breadthFirstTraversal()).toBe(null);
  });

  it('breadthFirstTraversal() should return a breadth first result', () => {
    let j = new KAryNode('J');
    j.appendChild('O');
    j.appendChild('H');
    j.appendChild('N');

    j.children[0].appendChild('I');
    j.children[0].appendChild('S');

    j.children[0].children[1].appendChild('B');
    j.children[0].children[1].appendChild('A');
    j.children[0].children[1].appendChild('L');
    j.children[0].children[1].appendChild('D');

    let tree = new KAryTree(j);
    let breadthTraversed = tree.breadthFirstTraversal();
    expect(breadthTraversed).toBe('J O H N I S B A L D');
  });

  it('depthFirsttraversal(), when no root value given, shold return null', () => {
    let tree = new KAryTree();
    let depthTraversed = tree.depthFirstTraversal();
    expect(depthTraversed).toBe(null);
  });
  
  it('depthFirsttraversal() should return a depth first result', () => {

    let j = new KAryNode('J');
    j.appendChild('O');
    j.appendChild('H');
    j.appendChild('N');

    j.children[0].appendChild('I');
    j.children[0].appendChild('S');

    j.children[0].children[1].appendChild('B');
    j.children[0].children[1].appendChild('A');
    j.children[0].children[1].appendChild('L');
    j.children[0].children[1].appendChild('D');

    let tree = new KAryTree(j);
    let depthTraversed = tree.depthFirstTraversal();
    
    expect(depthTraversed).toBe('J N H O S D L A B I');

  });

});