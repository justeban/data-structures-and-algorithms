'use strict';

const util = require('util');

const Hashmap = require('./lib/hashmap/hashmap.js');
const {freqWords} = require('./lib/hashmap/repeated-word/repeated_word.js');

let hash = new Hashmap();

hash.set('Doug', 'Cat');
hash.set('Demi', 'Cat');
hash.set('Dezi', 'Dog');

let x = hash.serialize();
let hash2 = new Hashmap();
hash2.deserialize(x);
console.log(util.inspect(hash2, {showHidden: true, depth: null}));

let string = "The best of times, the worst of times.";
let value = freqWords(string);

console.log(value);

