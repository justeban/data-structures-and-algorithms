'use strict';

let Hashmap = require('../hashmap.js');
let util = require('util');

let repeatedWord = (str) => {

  let hash = new Hashmap();
  let currentWord = '';
  
  let newStr = str.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "");
  
  for (let i = 0; i < str.length; i++) {
    
    let currentLetter = newStr[i];

    if ( newStr.charCodeAt(i) === 32 || i === newStr.length) {
      let currHash = hash.makeHash(currentWord);
      if (hash.map[currHash]) {
        return currentWord;
      } else {
        hash.set(currentWord);
        currentWord = '';
      }
    } else {
      currentWord = currentWord + currentLetter;

    }
  }
  console.log(util.inspect(hash, { showHidden: true, depth: null }));
  return 'no repeats';
};

console.log(repeatedWord('Hello Stranger how are you you?'));