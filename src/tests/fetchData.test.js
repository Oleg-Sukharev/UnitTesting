import { describe, it, expect } from 'vitest';
import { fetchData } from '../core';

describe('fetchData', () => {
  it('should return a promise that will resolve to an array of numbers', () => {
    fetchData((result) => {
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);

      result.forEach((item) => {
        expect(typeof item).toBe('number');
      });
    }).catch((error) => {
      expect(error).toHaveProperty('reason');
      expect(error.reason).toMatch(/failed/i);
    });
  });
});

describe('fetchDataAwait', () => {
  it('should return a promise that will resolve to an array of numbers', async () => {
    try {
      const result = await fetchData();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    } catch (error) {
      expect(error).toHaveProperty('reason');
      expect(error.reason).toMatch(/failed/i);
    }
  });
});
