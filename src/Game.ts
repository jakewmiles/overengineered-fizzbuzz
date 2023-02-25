import { Rule } from "./rules/Rule";

export class Game {
  constructor(rules: Rule[]) {
    this.rules = rules;
  }

  private rules: Rule[];

  public play(input: number): string {
    return (
      this.rules
        .map((rule) => (rule.applies(input) ? rule.getRuleName() : ""))
        .join("") || input.toString()
    );
  }
}
