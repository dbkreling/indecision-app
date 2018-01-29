// This file contains the script manually editable
console.log('App.js is running');

var app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer'
}
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subTitle}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

var user = {
  name : 'Daniel',
  occupation : 'Software Engineer',
  age : 26,
  location: 'Brazil'
}

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Occupation: {user.occupation}</p>
    <p>Location: {user.location}</p>
    <p>Age: {user.age}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
            