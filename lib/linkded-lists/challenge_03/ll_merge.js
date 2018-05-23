'use strict';

const LL = require('../linked_list.js');

let mergeLists = (list1, list2) => {

  let newList = new LL();
  let currentNewList = newList.head;
  let currentList1 = list1.head;
  let currentList2 = list2.head;

  currentNewList = currentList1;
  currentList1 = currentList1.next;

  while (currentList1 || currentList2) {
    if (currentList2) {
      currentNewList.next = currentList2;
      currentList2 = currentList2.next;
      currentNewList = currentNewList.next;
    }
    if (currentList1) {
      currentNewList.next = currentList1;
      currentList1 = currentList1.next;
      currentNewList = currentNewList.next;
    }
  }
  return newList;
};

module.exports = mergeLists;