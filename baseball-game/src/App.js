import React, { Component } from 'react';
import baseball from './baseball.svg';
import './App.css';

import Display from './Components/Display';

class App extends Component {
  state = {
    greeting: "Hello World",
    display: [
      {
        id: 1,
        name: 'James',
        balls: 0,
        strikes: 0
      },
      {
        id: 2,
        name: 'Blahb',
        balls: 0,
        strikes: 0
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Baseball Score Table</h1>
          <img src={baseball} className="App-logo" alt="logo" />
        </header>
        <Display display={this.state.display}></Display>
      </div>
    );
  }

  greetTeam = () => {
    this.setState({ greeting: "Hello Developers" })
  };
}

export default App;