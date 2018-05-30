'use strict';

const Shelter = require('../../../../lib/stacks-and-queues/challenge-02/fifo_animal_shelter.js');
const Animal = require('../../../../lib/stacks-and-queues/challenge-02/animal.js');

// Pet Instances
let dog1 = new Animal('dog', 'jerry');
let dog2 = new Animal('dog', 'dezi');
let dog3 = new Animal('dog', 'rosise');
let dog4 = new Animal('dog', 'lorenzo');
let dog5 = new Animal('dog', 'zeke');

let cat1 = new Animal('cat', 'snickers');
let cat2 = new Animal('cat', 'spots');
let cat3 = new Animal('cat', 'princess');
let cat4 = new Animal('cat', 'brooklyn');
let cat5 = new Animal('cat', 'dead meat');

describe('FIFO Animal Shelter Challenge', () => {
  describe('Enqueue()', () => {

    it('when run with no value, expet to throw an error', () => {
      let animalShelter = new Shelter();
      expect(() => {
        animalShelter.enqueue();
      }).toThrow();
    });

    it('when run with a value that is not a string, expect error', () => {
      let animalShelter = new Shelter();
      expect(() => {
        animalShelter.enqueue();
      }).toThrow();
    });

    it('when run with value, expect each value to go to end of queue', () => {
      let animalShelter = new Shelter();

      animalShelter.enqueue(dog1).enqueue(dog2).enqueue(cat1).enqueue(dog3).enqueue(cat2).enqueue(cat3);

      expect(animalShelter.queue[animalShelter.queue.length - 1].name).toBe(cat3.name);
    });

  });

  describe('Dequeue()', () => {

    it('when run empty it should return animal first in queue and list modified', () => {
      let animalShelter = new Shelter();
      animalShelter.enqueue(dog1).enqueue(dog2).enqueue(cat1).enqueue(dog3).enqueue(cat2).enqueue(cat3);
      let animal = animalShelter.dequeue();

      expect(animalShelter.queue.length).toBe(5);
      expect(animal).toBe(dog1);
    });

    it('when run with dog preference, it should return first dog in queue', () => {
      let animalShelter = new Shelter();
      animalShelter.enqueue(cat1).enqueue(cat2).enqueue(cat3).enqueue(dog1).enqueue(dog2);
      let animal = animalShelter.dequeue('dog');

      expect(animal).toBe(dog1);
    });

    it('when run with cat preference, it should return first cat from queue', () => {
      let animalShelter = new Shelter();
      animalShelter.enqueue(dog1).enqueue(dog2).enqueue(dog4).enqueue(dog5).enqueue(cat5);
      let animal = animalShelter.dequeue('cat');

      expect(animal).toBe(cat5)
    });
    
  });
});