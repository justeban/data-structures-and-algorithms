'use strict';

const util = require('util');

const Hashmap = require('./lib/hashmap/hashmap.js');

let myhash = new Hashmap(0);


myhash.set('Dezi', 'Dog');
myhash.set('Doug', 'Dog');
myhash.set('Demi', 'Dog');
myhash.update('Demi', 'Cat');
// myhash.set('Dezi');
// console.log(util.inspect(myhash, {showHidden: true, depth: null}));

// myhash.delete('Demi');
console.log(util.inspect(myhash, { showHidden: true, depth: null }));

// console.log(myhash.delete('Dezi'));
// console.log(myhash.set('Dezi', 'Cat'));
let data = myhash.serialize();

// let newHash = new Hashmap(0);
console.log(data);
// console.log(newHash.deserialize(data));