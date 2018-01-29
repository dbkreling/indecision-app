// This file contains the script manually editable
console.log('App.js is running');

// JSX - JavaScript XML - extension
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is JSX from src/app.js</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Daniel Kreling</h1>
    <p>Occupation: Software Engineer</p>
    <p>Locatiion: Brazil</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
            