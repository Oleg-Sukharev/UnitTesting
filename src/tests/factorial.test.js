import { describe, it, expect } from 'vitest';
import factorial from '../factorial';

describe('factorial', () => {
  it('should return 1 if arg is 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 if arg is 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return 2 if arg is 2', () => {
    expect(factorial(2)).toBe(2);
  });

  it('should return 6 if arg is 3', () => {
    expect(factorial(3)).toBe(6);
  });

  it('should return 5040 if arg is 7', () => {
    expect(factorial(7)).toBe(5040);
  });

  it('should return undefined if given a negative number', () => {
    expect(factorial(-1)).toBeUndefined();
  });
});
