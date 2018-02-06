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

const appRoot = document.getElementById('app');

let render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove all</button>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
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