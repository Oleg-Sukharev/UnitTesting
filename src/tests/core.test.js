import { it, expect, describe } from 'vitest';

describe('test suite', () => {
  it('test catese', () => {
    const result = 'The requested file was not found.';
    // Loose (too general)
    expect(result).toBeDefined();
    // Tight (too specific)
    expect(result).toBeDefined('The requested file was not found.');
    // Better assertion
    // expect(result).toMatch("not found");
    expect(result).toMatch(/not found/i);
  });
});

describe('test suite', () => {
  it('test catese', () => {
    const result = [1, 2, 3];

    // Loose
    expect(result).toBeDefined();
    // Tight (too specific)
    expect(result).toEqual([1, 2, 3]);
    // Better
    expect(result).toEqual(expect.arrayContaining([2, 1, 3]));

    expect(result.length).toBeGreaterThan(0);
  });
});

describe('test suite', () => {
  it('test catese', () => {
    const result = { name: 'John Doe' };

    expect(result).toMatchObject({ name: 'John Doe' });
    expect(result).toHaveProperty('name');
    expect(typeof result.name).toBe('string');
  });
});
