// This file contains the script manually editable
console.log('App.js is running');

 const app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;  // e.target is form, and access the value of the element named option
  
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';  // clear the option just added
    render()
  }
};

const removeAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[randomNum]);
};

const appRoot = document.getElementById('app');

let render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
      <button disabled={app.options.length === 0}  onClick={onMakeDecision}>What Should I Do?</button>
      <button onClick={removeAll}>Remove all</button>
      <ol>
        {app.options.map((option) => <li key={option}>{option}</li>)} 
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render()