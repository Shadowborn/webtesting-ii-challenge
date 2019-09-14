import React, { Component } from 'react';
import baseball from './baseball.svg';
import './App.css';

// import Display from './Components/Display';
// import Dashboard from './Components/Dashboard';

class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    greeting: "Hello World",
    balls: 1,
    strikes: 0,
    fouls: 0,
    hits: 0
  };
}
  
addballs = () => {
  this.setState({
    balls: this.state.balls + 1
  }, () => console.log(this.state.balls)) // prints true
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Baseball Score Table</h1>
          <img src={baseball} className="App-logo" alt="logo" />
        </header>
        {/* <Display display={this.state.display}></Display> */}
        <div><button onClick={this.addballs}>Add to ball count</button>{this.state.balls}</div>
        {/* <Dashboard display={this.state.display}></Dashboard> */}
        
      </div>
    );
  }
};

export default App;