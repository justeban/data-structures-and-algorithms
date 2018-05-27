'use strict';

const Queue = require('../../../lib/stacks-and-queues/queue.js');

describe('Queue Module', () => {
  it('when queue constructor run, expect queue to be new instance of an Array', () => {
    let queue = new Queue; 
    expect(queue.queue instanceof Array).toBe(true);
  });

  it('when enqueue run, expect value to be at end of queue', () => {
    let queue = new Queue;
    queue.enqueue(1).enqueue(2).enqueue(3);
    expect(queue.queue[2]).toBe(3);
  });

  it('when dequeue is run, and queue is empty, an error sould be thrown', () => {
    let queue = new Queue;
    expect(() => {
      queue.dequeue();
    }).toThrow('empty');
  });

  it('when dequeue is run, it should return first in queue and modify queue', () => {
    let queue = new Queue;
    queue.enqueue(1).enqueue(2).enqueue(3);

    let returned = queue.dequeue();
    expect(returned).toBe(1);
  });

  it('when serialize is run, expect to return JSON valid object representing queue', () => {
    let queue = new Queue;
    queue.enqueue(1).enqueue(2).enqueue(3);

    expect(queue.serialize()).toBe("[1,2,3]");
  });

  it('when deserialize is run, expect to deserialize value and use it to populate queue', () => {
    let queue = new Queue;
    queue.deserialize("[1,2,3]")

    expect(queue.queue).toEqual([1,2,3]);
  });
});