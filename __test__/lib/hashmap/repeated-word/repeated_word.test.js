'use strict';

const {repeatedWord, freqWords, numWords} = require('../../../../lib/hashmap/repeated-word/repeated_word.js');
const util = require('util');

describe('REPEATED WORD CHALLENGE', () => {

  describe('reapeatedWord()', () => {

    it('expect to return repeated words of a string', () => {
      let string = "John is bald bald";
      let value = repeatedWord(string);
      expect(value).toContain('bald');
    });
  });

  describe('freqWords', () => {

    it('expect to return object with most frequent words on top', () => {
      let string = "There is a time for mourning and a time for laughing. A time for peace and a time for war."
      let value = freqWords(string);

      for (let i = 0; i < value.length; i++) {
        if (value[i].word === 'a') expect(value[i].frequency).toBe(4);
        if (value[i].word === 'for') expect(value[i].frequency).toBe(4);
        if (value[i].word === 'time') expect(value[i].frequency).toBe(4);
      }
    });

  });

  describe('numWords()', () => {
    it('expect to return number of words in a string', () => {
      let string = "There is a time for mourning and a time for laughing. A time for peace and a time for war."
      let value = numWords(string);

      expect(value).toBe(20);
    });
  });

});