import { Rule } from "../Rule";

export class Wizz implements Rule {
  getRuleName(): string {
    return "Wizz";
  }
  applies(input: number): boolean {
    return input % 7 === 0;
  }
}
