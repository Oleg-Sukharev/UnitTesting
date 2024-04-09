import { describe, it, expect } from 'vitest';

import { canDrive } from '../core.js';

describe('canDrive', () => {
  it('should return error if country code is not valid', () => {
    const result = canDrive(15, 'FR');
    expect(result).match(/invalid/i);
  });

  it('should return false for underage in the US', () => {
    const result = canDrive(15, 'US');
    expect(result).toBe(false);
  });

  it('should return true for min age in the US', () => {
    const result = canDrive(16, 'US');
    expect(result).toBe(true);
  });

  it('should return true for eligable in the US', () => {
    const result = canDrive(17, 'US');
    expect(result).toBe(true);
  });

  it('should return false for underage in the UK', () => {
    const result = canDrive(16, 'UK');
    expect(result).toBe(false);
  });

  it('should return true for min age in the UK', () => {
    const result = canDrive(17, 'UK');
    expect(result).toBe(true);
  });

  it('should return true for eligable in the UK', () => {
    const result = canDrive(18, 'UK');
    expect(result).toBe(true);
  });
});

describe('canDriveParameterized', () => {
  it('should return error if country code is not valid', () => {
    const result = canDrive(15, 'FR');
    expect(result).match(/invalid/i);
  });

  it.each([
    { age: 15, country: 'US', result: false },
    { age: 16, country: 'US', result: true },
    { age: 17, country: 'US', result: true },
    { age: 16, country: 'UK', result: false },
    { age: 17, country: 'UK', result: true },
    { age: 18, country: 'UK', result: true }
  ])(
    'should return $result for ($age,$country)',
    ({ age, country, result }) => {
      expect(canDrive(age, country)).toBe(result);
    }
  );
});
