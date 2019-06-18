import React, { Component } from 'react';
import baseball from './baseball.svg';
import './App.css';

import Display from './Components/Display';
// import Dashboard from './Components/Dashboard';

class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    greeting: "Hello World",
    display: [
      {
        id: 1,
        name: 'James',
        balls: 0,
        strikes: 0,
        fouls: 2,
        hits: 0
      },
      {
        id: 2,
        name: 'Blahb',
        balls: 0,
        strikes: 0,
        fouls: 2,
        hits: 0
      },
    ],
  };
}
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Baseball Score Table</h1>
          <img src={baseball} className="App-logo" alt="logo" />
        </header>
        <button onClick={addballs}>Add balls</button>
        <Display display={this.state.display}></Display>
        {/* <Dashboard display={this.state.display}></Dashboard> */}
        
      </div>
    );
    function addballs() {
      this.display[0].balls = this.display[0].balls++;
      console.log("Button clicked", this.display[0].balls)
  }
  }
};

export default App;