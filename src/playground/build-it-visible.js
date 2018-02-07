let visible = false;

const toggle = () => {
  console.log('inside toggle');
  visible = !visible;
  render();  
}

let render = () => {
  const template = (
    <div>
      <h1>Reveal a Secret App</h1>
      <p>Press the button below to see a secret message</p>
      <button onClick={toggle}>{visible ? 'Hide secret' : 'Show Secret'}</button>
      {visible ? 
        <p>This is a secret message. Press the button again to hide it.</p> &&
        <ol>
          <li>Create render function and const with HTML/JS inside and call it to render on the screen</li>
          <li>Add button and set 'visible' variable</li>
          <li>Create 'toggle' function</li>
          <li>Add text to display inside the logic wired with the 'visible' variable</li>
        </ol> : ''}
    </div>
  );
  
  ReactDOM.render(template, document.getElementById('app'));
}

render();