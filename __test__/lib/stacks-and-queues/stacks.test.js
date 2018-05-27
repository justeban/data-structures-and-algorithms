'use strict';

const Stack = require('../../../lib/stacks-and-queues/stack.js');

describe('Stack Module', () => {

  it('when constructor run, expect stack to be an instance of an array', () => {
    let stack = new Stack; 
    expect(stack.stack instanceof Array).toBe(true);
  });

  it('when using push(), expect it to push value to front of stack', () => {
    let stack = new Stack();
    stack.push('222');

    expect(stack.stack[0]).toBe('222');
    
    stack.push('333').push('444').push('555');
    expect(stack.stack[0]).toBe('555');
  });

  it('when pop() run, if stack is empty, expect error to be thrown', () => {
    let stack = new Stack; 
    expect(() => {
      stack.pop()
    }).toThrow('Empty');
  });

  it('when pop() run, expect it to return first value in stack and for stack to be modified', () => {
    let stack = new Stack; 
    stack.push(1).push(2).push(3);
    
    let returned = stack.pop();

    expect(returned).toBe(3);
    expect(stack.stack.length).toBe(2);

  });

});