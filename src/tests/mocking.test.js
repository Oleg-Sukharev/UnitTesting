import { describe, vi, it, expect } from 'vitest';

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
});
