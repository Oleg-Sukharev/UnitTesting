import { describe, it, expect } from "vitest";
import { fizzBuzz, max } from "../intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    // test('should return the first argument if it is greater', ()=> {
    // Arrange
    const a = 5;
    const b = 4;

    // Act
    const result = max(a, b);

    // Assert
    expect(result).toBe(a);
  });
  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return the first argument the arguments are equal", () => {
    expect(max(1, 2)).toBe(2);
  });
});

describe("fizzBuzz", () => {
  it("should return 'FizzBuzz' if arg is divisble by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return 'Fizz' if arg is only divisable by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("should return 'Buzz' if arg is only divisable by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return arg if arg is not divisble by 3 and 5", () => {
    expect(fizzBuzz(2)).toBe("2");
  });
});
