'use strict';

class Animal {
  constructor(kind, name) {
    this.kind = kind.toLowerCase();
    this.name = name;
  }
}

module.exports = Animal;