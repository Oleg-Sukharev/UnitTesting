import { it, expect, describe, beforeEach } from 'vitest';
import { Stack } from '../core';

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('push should add an item onto the top of the stack', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.items).toEqual([1, 2]);
  });

  it('pop should remove and return an item from the top of the stack', () => {
    stack.push(1);
    stack.push(2);

    const poppedItem = stack.pop();

    expect(poppedItem).toBe(2);
    expect(stack.size()).toBe(1);
  });

  it('pop should throw an error when an array is empty', () => {
    expect(() => stack.pop()).toThrow(/empty/i);
  });

  it('peek return the top item of the stack without removing it', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.size()).toBe(2);
  });

  it('peek should throw an error when an array is empty', () => {
    expect(() => stack.peek()).toThrow(/empty/i);
  });

  it('isEmpty should return true if stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('isEmpty should return false if stack is not empty', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it('size should return the number of items in the stack', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.size()).toBe(2);
  });

  it('clear should remove all items from the stack', () => {
    stack.push(1);
    stack.push(2);

    stack.clear();
    expect(stack.size()).toBe(0);
  });
});
