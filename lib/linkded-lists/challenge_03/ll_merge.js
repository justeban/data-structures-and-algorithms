'use strict';

const LL = require('../linked_list.js');

let mergeLists = (list1, list2) => {

  let newList = new LL();
  let currentList1 = list1.head;
  let currentList2 = list2.head;

  newList.append(currentList1.value);
  currentList1 = currentList1.next;

  while (currentList1 || currentList2) {
    if (currentList2) {
      newList.append(currentList2.value);
      currentList2 = currentList2.next;
    }
    if (currentList1) {
      newList.append(currentList1.value);
      currentList1 = currentList1.next;
    }
  }
  return newList;
};

module.exports = mergeLists;