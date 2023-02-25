import { Buzz } from "../src/rules/implementations/Buzz";

describe("Buzz", () => {
  let buzz: Buzz;

  beforeEach(() => {
    buzz = new Buzz();
  });

  it("should return true when input is divisible by 5", () => {
    const result = buzz.applies(5);
    expect(result).toBeTruthy();
  });

  it("should return false when input is not divisible by 5", () => {
    const result = buzz.applies(6);
    expect(result).toBeFalsy();
  });

  it("should return the rule name", () => {
    const result = buzz.getRuleName();
    expect(result).toBe("Buzz");
  });
});
