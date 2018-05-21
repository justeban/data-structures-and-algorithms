'use strict';

const LL = require('../../../lib/linkded-lists/linked_list.js');

describe('Linked List Module', () => {
  
  it('constructor(), when run...', () => {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it('append(value), when run, if Linked List is empty expect list.head.value to equal value',() => {
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);
    
    expect(list.head.value).toEqual(initialValue);
    expect(list.head.next).toBeNull();
  });

  it('append(value), when run, if not inital value, expect list.head.next to equal value', () => {
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);

    let secondValue = 'Something Else';
    list.append(secondValue);

    expect(list.head.value).toEqual(initialValue);
    expect(list.head.next.value).toEqual(secondValue);
  });

  it('append(value), when run, expect next to display next node until at the end', () => {
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);

    let secondValue = 'Something Else';
    list.append(secondValue);

    let thirdValue = 'Third Thing';
    list.append(thirdValue);

    expect(list.head.value).toEqual(initialValue);
    expect(list.head.next.value).toEqual(secondValue);
    expect(list.head.next.next.value).toEqual(thirdValue);

    let currentNode = list.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
  
    expect(currentNode.value).toEqual(thirdValue);
  });

  it('prepend(value), when run, expect to replace list head with value', () => {
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let secondValue = 'Second One';
    list.prepend(secondValue);
    expect(list.head.value).toEqual(secondValue);
  });

  it('prepend(value), when run, expect to replace list head with value on any length of Linked List', () => {
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);

    let secondValue = 'Something Else';
    list.append(secondValue);

    let thirdValue = 'Third Thing';
    list.append(thirdValue);

    let fourthValue = 'Fourth Thing';
    list.prepend(fourthValue);

    expect(list.head.value).toEqual(fourthValue);
  });

  it('prepend(value), when run, expect to replace list head after any amount of prepends', () => {
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);

    let secondValue = 'Something Else';
    list.append(secondValue);

    let thirdValue = 'Third Thing';
    list.append(thirdValue);

    let fourthValue = 'Fourth Thing';
    list.prepend(fourthValue);

    let fifthValue = 'Fifth Thing';
    list.prepend(fifthValue);

    let sixthValue = 'Sixth Thing';
    list.prepend(sixthValue);

    expect(list.head.value).toEqual(sixthValue);
  });

  it('reverse(), when run, if single node list then it should return list unchanged', () => {
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    list.reverse();
    expect(list.head.value).toEqual(initialValue);

  });

  it('reverse(), when run, should make last node to be head and first node\'s next to be null', () => {
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);

    let secondValue = 'Second Thing';
    list.append(secondValue);

    let thirdValue = 'Third Thing';
    list.append(thirdValue);

    let fourthValue = 'Fourth Thing';
    list.append(fourthValue);
    
    list.reverse();

    expect(list.head.value).toEqual(fourthValue);
    expect(list.head.next.next.next.value).toEqual(initialValue);
    expect(list.head.next.next.next.next).toBeNull();
  });

  it('remove(\'one\'), when run, if offset is not a number should return an error', () => {
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);

    let secondValue = 'Second Thing';
    list.append(secondValue);
    expect(() => {
      list.remove('one');
    }).toThrow();

  });

  it('remove(-1), when run, if offset is not a number should return an error', () => {
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);

    let secondValue = 'Second Thing';
    list.append(secondValue);
    expect(() => {
      list.remove(-1);
    }).toThrow();

  });

  it('remove(15), when run, if offset is greater than length of linked list, should return an error', () => {
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);

    let secondValue = 'Second Thing';
    list.append(secondValue);

    expect(() => {
      list.remove(15);
    }).toThrowError(/^offset greater than length of linked list$/);
  });

  it('remove(0), when run, will remove node at head and replace with next node (zero-based)', () => {
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);

    let secondValue = 'Second Thing';
    list.append(secondValue);

    let thirdValue = 'Third Thing';
    list.append(thirdValue);

    let fourthValue = 'Fourth Thing';
    list.append(fourthValue);
    
    list.remove(0);

    expect(list.head.value).toEqual(secondValue);

  });

  it('remove(2), when run will remove node at index 2, or third item, (zero-based)', () => {
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);

    let secondValue = 'Second Thing';
    list.append(secondValue);

    let thirdValue = 'Third Thing';
    list.append(thirdValue);

    let fourthValue = 'Fourth Thing';
    list.append(fourthValue);

    list.remove(2); 

    expect(list.head.next.next.value).toEqual(fourthValue);

  });


});