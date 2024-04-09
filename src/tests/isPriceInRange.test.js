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

describe('isPriceInRangeParameterized', () => {
  it.each([
    { scenario: 'price < min', price: -1, result: false },
    { scenario: 'price = min', price: 0, result: true },
    { scenario: 'price between min and max', price: 5, result: true },
    { scenario: 'price = max', price: 10, result: true },
    { scenario: 'price > max', price: 11, result: false }
  ])('should return $result when $scenario', ({ price, result }) => {
    expect(isPriceInRange(price, 0, 10)).toBe(result);
  });
});
