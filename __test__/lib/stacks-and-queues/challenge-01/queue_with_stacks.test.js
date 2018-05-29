'use strict';

const Queue = require('../../../../lib/stacks-and-queues/challenge-01/queue_with_stacks.js');

describe('QUEUES WITH STACKS CHALLENGE', () => {
  describe('enqueue(value) method', () => {

    it('when run with no value, expect to throw error', () => {
      let queue = new Queue();
      expect(() => {
        queue.enqueue2();
      }).toThrow();
    });

    it('when run, will push value to back of queue (queue in this module reads right to left)', () => {
      let queue = new Queue();
      queue.enqueue2(22);
      queue.enqueue2('Hello');
      queue.enqueue2(55);

      expect(queue.queue).toEqual([55, 'Hello', 22]);

      // to reset stack that is being used by queue
      queue.dequeue2();
      queue.dequeue2();
      queue.dequeue2();
    });

    it('when run chained together, should function properly', () => {
      let queue = new Queue();
      queue.enqueue2(22).enqueue2('Hello').enqueue2(55);
      expect(queue.queue).toEqual([55, 'Hello', 22]);

      // to reset stack that is being used by queue
      queue.dequeue2();
      queue.dequeue2();
      queue.dequeue2();
    });

  });

  describe('dequeue() method', () => {
    
    it('when run, if queue is empty, will throw error', () => {
      let queue = new Queue();
      expect(() => {
        queue.dequeue2();
      }).toThrow();
    });

    it('when run, expect to remove items from queue in FIFO fashion', () => {
      let queue = new Queue();
      queue.enqueue2(22).enqueue2('Hello').enqueue2(55);

      let popped = queue.dequeue2();

      expect(popped).toEqual(22);
      expect(queue.queue).toEqual([55, 'Hello']);

      // to reset stack that makes up queue
      queue.dequeue2();
      queue.dequeue2();
    });

    it('when run, expect to return dequeued value', () => {
      let queue = new Queue();
      queue.enqueue2(22).enqueue2('Hello').enqueue2(55);

      let popped = queue.dequeue2();

      expect(popped).toEqual(22);
    });
  });
});