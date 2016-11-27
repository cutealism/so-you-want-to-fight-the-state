import React, { Component } from 'react';
import './App.css';
import intro from './data/intro.json';
import signal from './data/signal.json';
import signalNetwork from './data/signal-network.json';
import Step from './action/Step.js';

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
      goal: 'intro',
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
  };

  restart = () => {
    this.startGoal('intro', 'fight')
  }

  render() {
    const step_data = data[this.state.goal][this.state.location];
    return <div className="App">
        <h1>{step_data.title || this.state.goal}</h1>
        <Step
            onNextStep={this.updateStep}
            onStartGoal={this.startGoal}
            onRestart={this.restart}
            data={step_data} />
        {this.state.goal !== "intro" && <a className="restart" onClick={this.restart}>Restart</a>}
      </div>;
  }
}

export default App;
