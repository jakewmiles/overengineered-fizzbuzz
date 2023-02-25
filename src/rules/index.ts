import { Fizz } from "./implementations/Fizz";
import { Buzz } from "./implementations/Buzz";
import { Wizz } from "./implementations/Wizz";

const rules = [new Fizz(), new Buzz(), new Wizz()];

export default rules;
