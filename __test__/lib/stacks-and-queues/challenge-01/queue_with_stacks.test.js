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
    });

    it('when run chained together, should function properly', () => {
      let queue = new Queue();
      console.log(queue);
      queue.enqueue2(22).enqueue2('Hello').enqueue2(55);
      expect(queue).toEqual([55, 'Hello', 22]);
    });

  });
});