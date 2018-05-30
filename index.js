'use strict';

const Shelter = require('./lib/stacks-and-queues/challenge-02/fifo_animal_shelter.js');
const Animal = require('./lib/stacks-and-queues/challenge-02/animal.js');

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

let animalShelter = new Shelter();

animalShelter.enqueue().enqueue(cat1).enqueue(dog2).enqueue(cat2);

// animalShelter.dequeue();
console.log(animalShelter);