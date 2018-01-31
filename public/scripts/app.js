'use strict';

// arguments is no longer bound with arrow functions

var add = function add(a, b) {
  // console.log(arguments);
  return a + b;
};

console.log(add(10, 1));

//this is no longer bound with objects

var user = {
  name: 'Daniel',
  cities: ['Batavia', 'New York', 'Dublin'],
  // printCitiesLived: function () {  // it works: ES5 syntax: this bound to user
  printCitiesLived: function printCitiesLived() {
    var _this = this;

    // New ES6 syntax that works
    // this.cities.forEach(function (city) {  --> fails: 'this' bound to the function scope
    this.cities.forEach(function (city) {
      console.log(_this.name + ' has lived in ' + city);
    });
  }
};

user.printCitiesLived();

// The same block using the map() function
var userTwo = {
  name: 'Daniel',
  cities: ['Ribeirao', 'Batavia', 'Floripa'],
  printCitiesLived: function printCitiesLived() {
    var _this2 = this;

    return this.cities.map(function (city) {
      return _this2.name + ' has lived in ' + city;
    });
  }
};

console.log(userTwo.printCitiesLived());

// challenge:

var multiplier = {
  // numbers = array of numbers
  // multiplyBy = single number
  // multiply = returns an array where the numbers have been multiplied
  numbers: [10, 20, 30],
  multiplyBy: 10,
  multiply: function multiply() {
    var _this3 = this;

    return this.numbers.map(function (num) {
      return num * _this3.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
