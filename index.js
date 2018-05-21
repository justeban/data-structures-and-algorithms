'use strict';

const LL = require('../data-structures-and-algorithms/lib/linkded-lists/linked_list.js');

let list = new LL();

let data = "[\"First Thing\", \"Second Thing\", \"Third Thing\", \"Fourth Thing\", \"Fifth Thing\"]";

list.deserialize(data)
console.log(list);

