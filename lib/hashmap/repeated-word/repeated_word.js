'use strict';

let Hashmap = require('../hashmap.js');
let util = require('util');

let repeatedWord = (str) => {

  let hash = new Hashmap();
  let currentWord = '';
  
  let newStr = str.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "");
  
  for (let i = 0; i <= str.length; i++) {

    let currentLetter = newStr[i] && newStr[i].toLowerCase();

    if ( newStr.charCodeAt(i) === 32 || i === newStr.length) {
      if (!(currentWord === '')) {
        let currHash = hash.makeHash(currentWord);
        if (hash.map[currHash]) {
          return currentWord;
        } else {
          hash.set(currentWord);
          currentWord = '';
        }
      }
    } else {
      currentWord = currentWord + currentLetter;
    }

  }
  return 'no repeats';
};

// Stretch Goal - return total number of words
let numWords = (str) => {

  let hash = new Hashmap();
  let currentWord = '';

  let newStr = str.replace(/[.,\/#!$?%\^&\*;:{}=\-_\`~()]/g, '');

  for (let i = 0; i <= str.length; i++) {

    let currentLetter = newStr[i] && newStr[i].toLowerCase();

    if (newStr.charCodeAt(i) === 32 || i === newStr.length) {
      if (!(currentWord === '')) {
        hash.set(currentWord);
        currentWord = '';
      } 
    } else {
      currentWord = currentWord + currentLetter;
    }
  }
  return hash.size;
}

// Stretch Goal - return a list of the most used words

let freqWords = (str) => {

  let hash = new Hashmap();
  let currentWord = '';

  let newStr = str.replace(/[.,\/#!$?%\^&\*;:{}=\-_\`~()]/g, '');

  for (let i = 0; i <= str.length; i++) {

    let currentLetter = newStr[i] && newStr[i].toLowerCase();

    if (newStr.charCodeAt(i) === 32 || i === newStr.length) {
      if(!(currentWord === '')) {
        hash.set(currentWord);
        currentWord = '';
      } 
    } else {
      currentWord = currentWord + currentLetter;
    }
  }

let words = Object.keys(hash.map).map((hashkey) => {
    let word = hash.map[hashkey].head.value.key;
    let frequency = hash.map[hashkey].size;
    return {word, frequency}
  });

  words.sort(compare);

  return words;
}

function compare(a, b) {
  
  const freqA = a.frequency;
  const freqB = b.frequency;

  let comparison = 0;
  if (freqA < freqB) {
    comparison = 1;
  } else if (freqA > freqB) {
    comparison = -1;
  }
  return comparison;
}

module.exports = {
  freqWords: freqWords, 
  numWords: numWords, 
  repeatedWord: repeatedWord,
}