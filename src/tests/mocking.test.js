import { describe, vi, it, expect } from 'vitest';
import { getPriceInCurrency } from '../mocking';
import { getExchangeRate } from '../libs/currency';

vi.mock('../libs/currency');

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
