import { Rule } from "../Rule";

export class Fizz implements Rule {
  getRuleName(): string {
    return "Fizz";
  }
  applies(input: number): boolean {
    return input % 3 === 0;
  }
}
