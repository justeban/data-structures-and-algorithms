'use strict';  

const Node = require('../../../lib/linkded-lists/node.js');

describe( 'Node Module', () => {

  it('constructor()', () => {
    let value = 'Some Value';
    let node = new Node(value);

    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
  
});