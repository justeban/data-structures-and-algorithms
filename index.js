'use strict';

const LL = require('../data-structures-and-algorithms/lib/linkded-lists/linked_list.js');

let list = new LL();
let initialValue = 'First One';
list.append(initialValue);

let secondValue = 'Something Else';
list.append(secondValue);

let thirdValue = 'Third Thing';
list.append(thirdValue);

let fourthValue = 'Fourth Thing';
list.prepend(fourthValue);

let x = list.serialize();
console.log(x);

list.deserialize(x);
console.log(list);

