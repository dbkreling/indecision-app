var nameVar = 'Daniel';
var nameVar = 'John';
console.log('nameVar', nameVar);

let nameLet = 'Marcie';
nameLet = 'Jen';
console.log('nameLet', nameLet);

const nameConst = 'Mike';
console.log('nameConst', nameConst);

const fullname = 'Daniel Kreling';
let firstname;

if (fullname) {
  firstname = fullname.split(' ')[0];
  console.log(firstname); 
}

console.log(firstname);