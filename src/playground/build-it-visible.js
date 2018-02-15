class VisibilityToggle extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggleVisible = this.handleToggleVisible.bind(this);
    this.state = {
      visible: false
    };
  };
  
  handleToggleVisible() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Reveal the Steps to this App</h1>
        <p>Press the button below to see a the steps to build this API</p>
        <button onClick={this.handleToggleVisible}>
          {this.state.visible ? 'Hide Steps' : 'Show Steps'}
        </button>
        {
          this.state.visible ?
          <p>This is a secret message. Press the button again to hide it.</p> &&
          <ol>
            <li>Create VisibilityToggle class that extends React.Component</li>
            <li>Create render function, insert divs with HTML/JS and add ReactDOM line at the bottom. This should be working right now.</li>
            <li>Add button and set the constructor method. Remember to bind 'this' and to create a state object (visible variable equals false).</li>
            <li>Create a handleToggleVisible method with the setState inside.</li>
            <li>Inside the method, invert the prevState.visible variable value.</li>
            <li>Add text to display inside the logic wired with the 'this.state.visible' variable</li>
          </ol> : ''
        }
      </div>
    );
  };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
