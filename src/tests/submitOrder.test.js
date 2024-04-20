import { describe, vi, it, expect } from 'vitest';
import { charge } from '../libs/payment.js';
import { submitOrder } from '../mocking.js';

vi.mock('../libs/payment.js/');

describe('submitOrder', () => {
  const order = { totalAmount: 10 };
  const creditCard = { creditCardNumber: 123 };

  it('should charge the customer', async () => {
    vi.mocked(charge).mockResolvedValue({ status: 'success' });

    await submitOrder(order, creditCard);

    expect(charge).toHaveBeenCalledWith(creditCard, order.totalAmount);
  });

  it('should return success if payment is successful', async () => {
    vi.mocked(charge).mockResolvedValue({ status: 'success' });

    const result = await submitOrder(order, creditCard);

    expect(result).toEqual({ success: true });
  });

  it('should return error if payment is unsuccessful ', async () => {
    vi.mocked(charge).mockResolvedValue({ status: 'failed' });

    const result = await submitOrder(order, creditCard);

    expect(result).toEqual({ success: false, error: 'payment_error' });
  });
});
