import { Rule } from "./rules/Rule";

export class Game {
  constructor(rules: Rule[]) {
    this.rules = rules;
  }

  private rules: Rule[];

  public play(input: number): string {
    let result = "";

    this.rules.forEach((rule) => {
      if (rule.applies(input)) {
        result += rule.getRuleName();
      }
    });

    return result || input.toString();
  }
}
