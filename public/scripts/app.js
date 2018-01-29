'use strict';

// This file contains the script manually editable
console.log('App.js is running');

var app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer'
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subTitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    )
  )
);

var user = {
  name: 'Daniel',
  occupation: 'Software Engineer',
  age: 26,
  location: 'Brazil'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Occupation: ',
    user.occupation
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
