import { Game } from "./Game";
import rules from "./rules";

function main() {
  const fizzBuzz = new Game(rules);
  for (let i = 1; i <= 200; i++) {
    console.log(fizzBuzz.play(i));
  }
}

main();
