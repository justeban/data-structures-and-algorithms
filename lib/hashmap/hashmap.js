'use strict';

const LL = require('../linkded-lists/linked_list.js');

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = () => {

      let ll = new LL; 
      let counter = size;

      while ( counter !== 0) {
        ll.append(null);
        counter --;
      }

      return ll;
    };
  }
}