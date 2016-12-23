import React, { Component } from 'react';
import './App.css';
import intro from './data/intro.json';
import signal from './data/signal.json';
import signalNetwork from './data/signal-network.json';
import encrypt from './data/encrypt.json';
import duckduckgo from './data/duckduckgo.json';
import Step from './action/Step.js';
import Navigation from './Navigation.js';

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
      history: ['start'],
      goal: 'intro',
      completedGoals: {},
    }, localStorage.state ? JSON.parse(localStorage.state) : {});
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.state = JSON.stringify(this.state);
  }

  updateLocation = (goal, steps) => {
    this.setState({
      goal: goal,
      history: steps,
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

  startGoal = (goal) => {
    this.updateLocation(goal, ['start'])
  }

  updateStep = (step) => {
    this.updateLocation(this.state.goal, [step, ...this.state.history])
  }

  getStepData = () => {
    const {goal, history} = this.state
    return data[goal][history[0]]
  }

  restart = () => {
    this.updateLocation('intro', ['fight'])
  }

  back = () => {
    this.setState({
      history: this.state.history.slice(1)
    })
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

        <Navigation
          showBack={this.state.goal !== "intro" && this.state.history.length > 1}
          onBack={this.back}
          showRestart={this.state.goal !== "intro"}
          onRestart={this.restart}
        />
      </div>
  }
}

export default App;
