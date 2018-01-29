'use strict';

// This file contains the script manually editable
console.log('App.js is running');

// JSX - JavaScript XML - extension
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is JSX from src/app.js'
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

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Daniel Kreling'
  ),
  React.createElement(
    'p',
    null,
    'Occupation: Software Engineer'
  ),
  React.createElement(
    'p',
    null,
    'Locatiion: Brazil'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
