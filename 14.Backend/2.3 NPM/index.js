import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

const name = generateName();
console.log(`Hello, my name is ${name}!`);

const superhero = randomSuperhero();
console.log(`My superhero name is ${superhero}!`);
