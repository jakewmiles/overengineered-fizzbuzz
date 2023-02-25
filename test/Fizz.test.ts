import { Fizz } from "../src/rules/implementations/Fizz";

describe("Fizz", () => {
  let fizz: Fizz;

  beforeEach(() => {
    fizz = new Fizz();
  });

  it("should return true when input is divisible by 3", () => {
    const result = fizz.applies(3);
    expect(result).toBeTruthy();
  });

  it("should return false when input is not divisible by 3", () => {
    const result = fizz.applies(4);
    expect(result).toBeFalsy();
  });

  it("should return the rule name", () => {
    const result = fizz.getRuleName();
    expect(result).toBe("Fizz");
  });
});
