import { describe, it, expect } from 'vitest';
import { validateUserInput } from '../core';

describe('validateUserInput', () => {
  it('should return success if input value is valid', () => {
    const result = validateUserInput('Jhon', 33);
    expect(result).toMatch(/successful/i);
  });

  it('should return error if username is not string', () => {
    const result = validateUserInput(1, 33);
    expect(result).toMatch(/invalid/i);
  });

  it('should return error if username is less than 2 characters', () => {
    const result = validateUserInput('J', 33);
    expect(result).toMatch(/invalid/i);
  });

  it('should return error if username is longer than 100 characters', () => {
    const result = validateUserInput('A'.repeat(101), 33);
    expect(result).toMatch(/invalid/i);
  });

  it('should return error if age is not a number', () => {
    const result = validateUserInput('Jhon', '33');
    expect(result).toMatch(/invalid/i);
  });

  it('should return error if age is less than 18', () => {
    const result = validateUserInput('Jhon', 17);
    expect(result).toMatch(/invalid/i);
  });

  it('should return error if age is greater than 150', () => {
    const result = validateUserInput('Jhon', 151);
    expect(result).toMatch(/invalid/i);
  });

  it('should return error if both username and age are invalid', () => {
    const result = validateUserInput('', 1);
    expect(result).toMatch(/invalid age/i);
    expect(result).toMatch(/invalid username/i);
  });
});
