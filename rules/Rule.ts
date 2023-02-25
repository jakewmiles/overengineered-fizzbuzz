export interface Rule {
  getRuleName(): string;
  applies(input: number): boolean;
}
