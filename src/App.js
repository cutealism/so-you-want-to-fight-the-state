import React, { Component } from 'react';
import './App.css';
import intro from './data/intro.json';
import signal from './data/signal.json';
import Action from './action/Action.js';

const data = {
  intro: intro,
  signal: signal,
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: 'start',
      goal: 'intro'
    };
  }

  updateStep = (step) => {
    this.setState({
      location: step
    });
  }

  startGoal = (goal) => {
    this.setState({
      location: 'start',
      goal: goal
    });
  }

  render() {
    return (
      <div className="App">
        <Action
            onNextStep={this.updateStep}
            onStartGoal={this.startGoal}
            step={data[this.state.goal][this.state.location]}></Action>
      </div>
    );
  }
}

export default App;
