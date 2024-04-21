import { describe, vi, it, expect } from 'vitest';
import { signUp } from '../mocking';
import { sendEmail } from '../libs/email';

// partial mocking
vi.mock('../libs/email.js', async (importOrigin) => {
  const originModule = await importOrigin();

  return {
    ...originModule,
    sendEmail: vi.fn()
  };
});

describe('signUp', () => {
  const email = 'test@gmail.com';

  it('should return false if email is not valid', async () => {
    const result = await signUp('a');

    expect(result).toBe(false);
  });

  it('should return true if email is valid', async () => {
    const result = await signUp(email);

    expect(result).toBe(true);
  });

  it('should send the welcome email is email is valid', async () => {
    const args = vi.mocked(sendEmail).mock.calls[0];

    expect(args[0]).toBe(email);
    expect(args[1]).toMatch(/welcome/i);
  });
});
