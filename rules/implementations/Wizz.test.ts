import { Wizz } from "./Wizz";

describe("Wizz", () => {
  let wizz: Wizz;

  beforeEach(() => {
    wizz = new Wizz();
  });

  it("should return true when input is divisible by 7", () => {
    const result = wizz.applies(7);
    expect(result).toBeTruthy();
  });

  it("should return false when input is not divisible by 7", () => {
    const result = wizz.applies(8);
    expect(result).toBeFalsy();
  });

  it("should return the rule name", () => {
    const result = wizz.getRuleName();
    expect(result).toBe("Wizz");
  });
});
