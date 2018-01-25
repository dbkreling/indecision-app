'use strict';

// This file contains the script manually editable
console.log('App.js is running');

// JSX - JavaScript XML - extension
var template = React.createElement(
            'p',
            null,
            'This is JSX from src/app.js'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
