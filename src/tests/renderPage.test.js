import { expect, it, describe, vi } from 'vitest';
import { renderPage } from '../mocking';
import { trackPageView } from '../libs/analytics';

vi.mock('../libs/analytics');

describe('renderPage', () => {
  it('should return correct content', async () => {
    const result = await renderPage();

    expect(result).toMatch(/content/i);
  });

  it('should call analytics', async () => {
    await renderPage();

    expect(trackPageView).toHaveBeenCalledWith('/home');
  });
});
