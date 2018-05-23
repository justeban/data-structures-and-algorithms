'use strict';

const LL = require('./lib/linkded-lists/challenge_01/ll.js');

const mergeLists = require('./lib/linkded-lists/challenge_03/ll_merge.js');

let list1 = new LL();

list1.append('111').append('222').append('333');

let list2 = new LL();
list2.append('555').append('666').append('777');

let greaterList = mergeLists(list1 , list2);
console.log(greaterList);