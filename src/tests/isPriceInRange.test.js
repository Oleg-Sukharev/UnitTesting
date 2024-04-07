import { it, expect, describe } from 'vitest';
import { isPriceInRange } from '../core';

describe('isPriceInRange', () => {
  it('should return false if the price is outside the range', () => {
    expect(isPriceInRange(-1, 0, 10)).toBe(false);
    expect(isPriceInRange(1, 15, 10)).toBe(false);
  });

  it('should return true if the price equals the min or the max', () => {
    expect(isPriceInRange(0, 0, 10)).toBe(true);
    expect(isPriceInRange(1, 0, 1)).toBe(true);
  });

  it('should return true if the price is in the range', () => {
    expect(isPriceInRange(5, 1, 10)).toBe(true);
  });
});
