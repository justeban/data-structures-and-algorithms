'use strict';

const LL = require('./lib/linkded-lists/challenge_01/ll.js');

let list = new LL();


list.append('222').append('333');


list.insertBefore('333', '444');

list.insertAfter('222', '555');
console.log(list);