import { square, add } from './utils.js';
import { isAdult, canDrink } from './person.js';

console.log('app.js is running');
console.log(square(4));
console.log(add(3, 2));

console.log('17 is adult: ', isAdult(17));
console.log('18 is adult: ', isAdult(18));
console.log('10 can drink: ', canDrink(10));
console.log('21 can drink: ', canDrink(21));
