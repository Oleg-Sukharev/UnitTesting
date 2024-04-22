import { describe, vi, it, expect, beforeEach } from 'vitest';
import { login, signUp } from '../mocking';
import { sendEmail } from '../libs/email';
import security from '../libs/security';

// clearning mocks
// use mock for external dependencies etc. database, API or services
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

  beforeEach(() => {
    vi.clearAllMocks();
    // vi.mocked(sendEmail).mockClear();
    // or we can clear it globally via vitest.config
  });

  it('should return false if email is not valid', async () => {
    const result = await signUp('a');

    expect(result).toBe(false);
  });

  it('should return true if email is valid', async () => {
    const result = await signUp(email);

    expect(result).toBe(true);
  });

  it('should send the welcome email is email is valid', async () => {
    await signUp(email);

    expect(sendEmail).toHaveBeenCalledOnce();
    const args = vi.mocked(sendEmail).mock.calls[0];

    expect(args[0]).toBe(email);
    expect(args[1]).toMatch(/welcome/i);
  });
});

describe('login', () => {
  it('should email get the one-time login code', async () => {
    const email = 'test@gmail.com';
    const spy = vi.spyOn(security, 'generateCode');

    await login(email);
    const securityCode = spy.mock.results[0].value.toString();
    expect(sendEmail).toHaveBeenCalledWith(email, securityCode);
  });
});
