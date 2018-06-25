'use strict';

class KAryNode {

  constructor(value = null) {
    this.value = value;
    this.children = [];
  }

  appendChild(value) {
    const nodeToAppend = new KAryNode(value);
    this.children.push(nodeToAppend);
  }
}

module.exports = KAryNode;
