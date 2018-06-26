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
      expect(hash.get('Dezi')).toBeUndefined();
    });
    
    it('expect to return value if key exists', () => {
      let hash = new Hashmap();
      hash.set('Dezi', 'Dog');
      let value = hash.get('Dezi');
      expect(value).toBe('Dog');
    });
  });
  
  describe('delete(key', () => {
    it('expect after run expect object at key to be undefined', () => {
      let hash = new Hashmap();
      hash.set('Dezi', 'Dog');
      hash.delete('Dezi');
      expect(hash.get('Dezi')).toBeUndefined();
    });
  });

  describe( 'update(key, value)', () => {
    it('when no value given expect an error', () => {
      let hash = new Hashmap();
      expect(() => hash.update('Dezi')).toThrow();
    });

    it('when no parameters given expected to throw an error', () => {
      let hash = new Hashmap();
      expect(() => hash.update()).toThrow();
    });

    it('when key given that does not match expected to throw an error', () => {
      let hash = new Hashmap();
      expect(() => hash.update('Dezi', 'Dog')).toThrow('');
    });
    it('when given valid key and value expect to update', () => {
      let hash = new Hashmap();
      hash.set('Dezi', 'Dog');
      hash.update('Dezi', 'Cat');
      expect(hash.get('Dezi')).toBe('Cat');
    });
  });

  describe('deserializ()', () => {
    it('when given invalid expect to throw', () => {
      let hash = new Hashmap();
      expect(() => hash.deserialize()).toThrow();
    });

    it('when given proper data expect to populate hashmap', () => {
      let hash = new Hashmap();
      hash.deserialize(`[{
        "2087642236": {
          "key": "Doug",
          "value": "Dog"
        },
        "2087827424": {
          "key": "Demi",
          "value": "Cat"
        },
        "2087847863": {
          "key": "Dezi",
          "value": "Dog"
        }
      }]`);
      expect(hash.get('Doug')).toBe('Dog');
    });

  });

});