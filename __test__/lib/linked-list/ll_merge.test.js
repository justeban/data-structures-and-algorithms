'use strict';

const LL = require('../../../lib/linkded-lists/challenge_01/ll.js');
const llmerge = require('../../../lib/linkded-lists/challenge_03/ll_merge.js');

describe('llmerge', () => {

  it('When given two list, new list should point to first list\'s head', () => {
    let list1 = new LL();

    list1.append('111').append('222').append('333');

    let list2 = new LL();
    list2.append('555').append('666').append('777');

    let greaterList = llmerge(list1, list2);
    
    expect(greaterList.head.value).toEqual('111');
  });

});
