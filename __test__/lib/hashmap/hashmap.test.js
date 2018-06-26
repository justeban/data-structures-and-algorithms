'use strict';

const LL = require('../../../lib/linkded-lists/linked_list.js');
const Hashmap = require('../../../lib/hashmap/hashmap.js');

describe('HASHMAP', () => {
  describe('constructor()' , () => {
    it('when run expect map to be instance of a linked list', () => {
      let hash = new Hashmap(0);
      expect(hash.map).toBeInstanceOf(LL);
    });
  });

  describe('set()', () => {
    it('expect to throw error when key already exists', () => {
      let hash = new Hashmap();
      hash.set('Dezi', 'Dog');
      expect(() => {
        hash.set('Dezi', 'Dog');
      }).toThrow();
    });

    it('expect to set with unique hash', () => {
      let hash = new Hashmap();
      hash.set('Dezi', 'Dog');
      hash.set('Demi', 'Dog');
      expect(hash.map.head.value).toBeDefined();
    });
  });

  describe('get(key)', () => {
   
    it('expect error when key does not exist', () => {
      let hash = new Hashmap();
      expect(hash.get('Dezi')).toBe('No Such Key');
    });
    
    it('expect to return value if key exists', () => {
      let hash = new Hashmap();
      hash.set('Dezi', 'Dog');
      let value = hash.get('Dezi');
      expect(value).toBe('Dog');
    });
  });
  
});