// arguments is no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(add(10, 1));

//this is no longer bound with objects

const user =  {
  name: 'Daniel',
  cities: ['Batavia', 'New York', 'Dublin'],
  // printCitiesLived: function () {  // it works: ES5 syntax: this bound to user
  printCitiesLived() { // New ES6 syntax that works
    // this.cities.forEach(function (city) {  --> fails: 'this' bound to the function scope
     this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
      
    });
  }
}

user.printCitiesLived();

// The same block using the map() function
const userTwo =  {
  name: 'Daniel',
  cities: ['Ribeirao', 'Batavia', 'Floripa'],
  printCitiesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
}

console.log(userTwo.printCitiesLived());

// challenge:

const multiplier = {
  // numbers = array of numbers
  // multiplyBy = single number
  // multiply = returns an array where the numbers have been multiplied
  numbers: [10, 20, 30],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy)
  }
};

console.log(multiplier.multiply());
