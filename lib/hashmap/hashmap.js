'use strict';

const LL = require('../linkded-lists/linked_list.js');
const hash = require('string-hash');

class Hashmap {

  constructor() {
    this.size = 0;
    this.map = (function() {
      let ll = new LL();
      let counter = 0;

      while (counter >= 0) {
        ll.append({});
        counter--;
      }

      return ll;
    }) ();
  }

  makeHash(key) {
    return hash(key);
  }

  set(key, value = null) {
    let hashkey = this.makeHash(key);
    if (!this.map.head.value[hashkey]) {
      this.map.head.value[hashkey] = {key: key, value: value};
      this.size++;
    } else {
      throw `key already exists, {${key}}`;
    }
    return this;
  }

  get(key) {
    let hashkey = this.makeHash(key);
    let value = this.map.head.value && this.map.head.value[hashkey] && this.map.head.value[hashkey].value;
    return value ? value : undefined;
  }

  delete(key) {
    let {[this.makeHash(key)]:deleted, ...items} = this.map.head.value; //eslint-disable-line
    this.map.head.value = Object.assign({}, items);
    this.size = this.size - 1;
    return 'item deleted';
  }

  update(key, newValue) {
    if (newValue === undefined) throw 'no value give';
    if (key === undefined) throw 'no key given';
    let hashkey = this.makeHash(key);
    if (this.map.head.value[hashkey]) {
      this.map.head.value[hashkey] = {key: key, value: newValue};
    } else {
      throw `{${key}} Is not present, did you mean to call set().`
    }
    return this;
  } 

  serialize() {
    return this.map.serialize();
  }

  deserialize(data) {

    if (!data) throw 'invalid input';

    let parsed = JSON.parse(data);
    Object.keys(parsed[0]).map((key) => {
      let singleKey = parsed[0][key].key;
      let value = parsed[0][key].value;
      this.set(singleKey, value);
    });
    return this;
  }
}

module.exports = Hashmap;