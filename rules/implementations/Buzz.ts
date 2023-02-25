import { Rule } from "../Rule";

export class Buzz implements Rule {
  getRuleName(): string {
    return "Buzz";
  }
  applies(input: number): boolean {
    return input % 5 === 0;
  }
}
