import React, { Component } from 'react';
import './App.css';
import intro from './data/intro.json';
import signal from './data/signal.json';
import signalNetwork from './data/signal-network.json';
import Action from './action/Action.js';

const data = {
  intro: intro,
  signal: signal,
  signalNetwork: signalNetwork,
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = localStorage.state ? JSON.parse(localStorage.state) : {
      location: 'start',
      goal: 'intro'
    };
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.state = JSON.stringify(this.state);
  }

  updateStep = (step) => {
    this.setState({
      location: step
    });
  }

  startGoal = (goal, step) => {
    this.setState({
      location: step || 'start',
      goal: goal
    });
  }

  restart = () => {
    this.startGoal('intro', 'fight')
  }

  render() {
    return (
      <div className="App">
        <Action
            onNextStep={this.updateStep}
            onStartGoal={this.startGoal}
            onRestart={this.restart}
            step={data[this.state.goal][this.state.location]}></Action>

        <button onClick={this.restart}>Restart</button>
      </div>
    );
  }
}

export default App;
