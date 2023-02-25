import { Game } from "./Game";

describe("Game", () => {
  let game;
  const mockRules = [
    {
      applies: jest.fn((x) => x % 3 === 0),
      getRuleName: jest.fn(() => "Fizz"),
    },
    {
      applies: jest.fn((x) => x % 5 === 0),
      getRuleName: jest.fn(() => "Buzz"),
    },
  ];

  beforeEach(() => {
    game = new Game(mockRules);
  });

  it("should return 1 when input is 1", () => {
    const result = game.play(1);
    expect(result).toBe("1");
  });

  it("should return Fizz when input is 3", () => {
    const result = game.play(3);
    expect(result).toBe("Fizz");
  });

  it("should return Buzz when input is 5", () => {
    const result = game.play(5);
    expect(result).toBe("Buzz");
  });
});
