'use strict';

class Shelter {
  constructor() {
    this.queue = new Array();
  }

  enqueue(animal) {
    if (!animal && typeof animal !== 'string') { throw 'Not Pet Given'; }
    this.queue[this.queue.length] = animal;
    return this;
  }

  dequeue(pref) {
    let query = pref && pref.toLowerCase() || null;
    let i = 0; 
    if (query) {
      while (this.queue[i].kind !== query) {
        i++;
      }
    } 

    let animal = this.queue[i];

    let newQueue = [];
    let l = 0; 
    
    for (let k=0; k < this.queue.length; k++) {
      if (k !== i) {
        newQueue[l] = this.queue[k];
        l++;
      }
    }
    this.queue = newQueue;
    return animal;
  }
}

module.exports =  Shelter;