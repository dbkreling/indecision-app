class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {   // override the constructor of Person
    super(name, age);               // use the variables name and age from the Person class
    this.major = major;             // add a new variable
  }

  hasMajor() {                      // create a new method
    return !!this.major;            // flip it twice (to convert 'undefined' to false)
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` The major is ${this.major}.`;
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    
    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }

    return greeting
  }
}

class BadStudent extends Student {
  constructor(name, age, major, subject) {
    super(name, age, major);  
    this.subject = subject;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.subject) {
      description += ` The flunked subject is ${this.subject}. Poor ${this.name}.`;
    }
    
    return description;
  }
}

// Create a new student
const me = new Student('Daniel Kreling', 40, 'Computer Science');
console.log(me.getDescription());

// Create a new traveller
const him = new Traveller('John Smith', 53, 'New York');
console.log(him.getGreeting());

// Create a new BadStudent
const bill = new BadStudent('Billy Joel', 18, 'Music', 'CSN201');
console.log(bill.getDescription());

// Create an anonymous person/student/traveller
const other = new Traveller();
console.log(other.getGreeting());
console.log(other.getDescription());


