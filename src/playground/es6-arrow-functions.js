const square = function (x) {
  return x * x;
}

const squareArrow = (x) => {
  return x * x;
}
 
const squareArrowCondensed = (x) => x * x;

console.log(square(8));
console.log(squareArrow(9));
console.log(squareArrowCondensed(4));

// Challenge - Use arrow functions
// Get first name: getFirstName('Mike Smith') -> 'Mike'
// create regular arrow function
// create arrow function using shorthand syntax

const getFirstName = (fullName) => {
  const firstName = fullName.split(' ')[0];
  return firstName;
};

const getFiName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));
console.log(getFiName('John Doe'));
