import { describe, vi, it, expect } from 'vitest';
import { getPriceInCurrency, getShippingInfo } from '../mocking';
import { getExchangeRate } from '../libs/currency';
import { getShippingQuote } from '../libs/shipping';

vi.mock('../libs/currency');
vi.mock('../libs/shipping');

describe('test suite', () => {
  it('test case', () => {
    const greet = vi.fn();
    greet.mockReturnValue('Hello');

    const result = greet();
    console.log(result);
  });

  it('test case', () => {
    const greet = vi.fn();
    greet.mockResolvedValue('promise');

    greet().then((result) => console.log(result));
  });

  it('test case', () => {
    const greet = vi.fn();
    greet.mockImplementation((name) => 'Hello ' + name);

    greet('Jhon');
    expect(greet).toBeCalled();
    expect(greet).toHaveBeenCalledOnce();
    expect(greet).toBeCalledWith('Jhon');
  });

  it('sendText', () => {
    const sendText = vi.fn();
    sendText.mockReturnValue('ok');
    const result = sendText('message');

    expect(sendText).toBeCalledWith('message');
    expect(result).toBe('ok');
  });
});

describe('getPriceInCurrency', () => {
  it('should return price in target currency', () => {
    vi.mocked(getExchangeRate).mockReturnValue(1.5);

    const price = getPriceInCurrency(10, 'AUD');

    expect(price).toBe(15);
  });
});

describe('getShippingInfo', () => {
  it('should return shipping unavailable if quote can not be fetched', () => {
    vi.mocked(getShippingQuote).mockReturnValue(null);

    const result = getShippingInfo('London');

    expect(result).toMatch(/unavailable/i);
  });

  it('should return shipping info if  quote can be fetched', () => {
    vi.mocked(getShippingQuote).mockReturnValue({ cost: 10, estimatedDays: 2 });

    const result = getShippingInfo('London');

    // expect(result).toMatch('$10');
    // expect(result).toMatch(/2 days/i);

    expect(result).toMatch(/shipping cost: \$10 \(2 days\)/i);
  });
});
