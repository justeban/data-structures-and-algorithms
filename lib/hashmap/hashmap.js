'use strict';

const LL = require('../linkded-lists/linked_list.js');
const hash = require('string-hash');
const util = require('util');

class Hashmap {

  constructor() {
    this.size = 0;
    this.map = {};
  }

  makeHash(key) {
    if (typeof key === 'number') return key;
    return hash(key);
  }

  set(key, value = null) {

    let hashkey = this.makeHash(key);

    if (!this.map[hashkey]) {

      let list = new LL();
      list.append({key: key, value: value});
      this.map[hashkey] = list;

      this.size++;

    } else {
      this.map[hashkey].append({key: key, value: value});
      this.size++;
    }
    return this;
  }

  get(key) {
    let hashkey = this.makeHash(key);
    let head = this.map[hashkey] && this.map[hashkey].head;

    let currentNode = head;
    let nextNode = currentNode && currentNode.next;

    let rtnArr = [];

    while (currentNode) {
      let value = currentNode.value.value;
      rtnArr.push(value);

      currentNode = nextNode;
      nextNode = currentNode && currentNode.next;
    }
    if (rtnArr.length) {
      return rtnArr.length === 1 ? rtnArr[0] : rtnArr;
    } else {
      return undefined;
    }
  }

  delete(key) {
    let {[this.makeHash(key)]:deleted, ...items} = this.map; //eslint-disable-line
    this.map = Object.assign({}, items);
    this.size = this.size - 1;
    return 'item deleted';
  }

  update(key, newValue) {

    if (newValue === undefined) throw 'no value give';
    if (key === undefined) throw 'no key given';

    let hashkey = this.makeHash(key);

    if (this.map[hashkey]) {

      let currentNode = this.map[hashkey].head;
      let nextNode = currentNode && currentNode.next;
      
      while (currentNode && (key === currentNode.value.key)) {
        currentNode.value = {key: key, value: newValue};
        currentNode = nextNode;
        nextNode = currentNode && currentNode.next;
      }

    } else {
      throw `{${key}} Is not present, did you mean to call set().`
    }
    return this;
  } 

  serialize() {
    let serialArray = [];
    Object.keys(this.map).map((key) => {
      let serialList = this.map[key].serialize();
      serialArray.push(serialList);
    });

    return JSON.stringify(serialArray);
  }

  deserialize(data) {

    if (!data) throw 'invalid input';

    let parsed = JSON.parse(data);
    
    for (let i = 0; i < parsed.length; i++) {
      let array = JSON.parse(parsed[i]);
      for (let j = 0; j < array.length; j++) {
        let {key, value} = array[j];
        this.set(key, value);
      }
    }
    return this;
  }
}

module.exports = Hashmap;