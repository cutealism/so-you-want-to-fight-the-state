import React, { Component } from 'react';
import './App.css';
import intro from './data/intro.json';
import signal from './data/signal.json';
import signalNetwork from './data/signal-network.json';
import encrypt from './data/encrypt.json';
import duckduckgo from './data/duckduckgo.json';
import Step from './action/Step.js';

const data = {
  intro: intro,
  signal: signal,
  signalNetwork: signalNetwork,
  encrypt: encrypt,
  duckduckgo: duckduckgo,
};

class App extends Component {

  constructor(props) {
    super(props);

    this.sound = new Audio("tada.mp3");
    this.state = Object.assign({
      location: 'start',
      goal: 'intro',
      completedGoals: {},
    }, localStorage.state ? JSON.parse(localStorage.state) : {});
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.state = JSON.stringify(this.state);
  }

  updateStep = (step) => {
    this.setState({
      location: step
    }, () => {
      var stepAction = this.getStepData().action;
      if (stepAction) {
        this.compleateAction(stepAction);
      }
    })
  }

  compleateAction(action) {
    switch(action.type) {
      case 'award':
        var newState = {};
        newState[this.state.goal] = true
        this.sound.currentTime = 0
        this.sound.play();
        this.setState({
          completedGoals: Object.assign(newState, this.state.completedGoals)
        });
        break;
      default:
    }
  }

  startGoal = (goal, step) => {
    this.setState({
      location: step || 'start',
      goal: goal
    });
  };

  getStepData = () => data[this.state.goal][this.state.location]
  getGoalStatus = (goalName) => this.state[this.statusKey(goalName)]
  statusKey = (goalName) => "goal_status_" + goalName

  restart = () => {
    this.startGoal('intro', 'fight')
  }

  render() {
    const step_data = this.getStepData();
    return <div className="App">
        <h1>{step_data.title || this.state.goal}</h1>
        <Step
            onNextStep={this.updateStep}
            onStartGoal={this.startGoal}
            onRestart={this.restart}
            data={step_data}
            completedGoals={this.state.completedGoals} />
        {this.state.goal !== "intro" && <a className="restart" onClick={this.restart}>Restart</a>}
      </div>
  }
}

export default App;
