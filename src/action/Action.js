import React, { Component } from 'react';
import './Action.css';
import Goal from './Goals';

class Action extends Component {

  onNextStepSelect = (step) => {
      if (step.step) {
          this.props.onNextStep(step.step);
      } else if (step.goal) {
          this.props.onStartGoal(step.goal);
      } else if (step.restart) {
          this.props.onRestart();
      }
  }

  render() {
    return (
      <div className="Action">
        <h1>{this.props.step.title}</h1>
        <p>{this.props.step.description}</p>
        {this.props.step.nextSteps && this.props.step.nextSteps.map((prompt) =>
            <button
                key={prompt.step || prompt.goal || "restart"}
                onClick={() => this.onNextStepSelect(prompt)}>
              {prompt.prompt}</button>)
        }
        {this.props.step.goals && this.props.step.goals.map((g) =>
            <Goal
                key={g.goal}
                onStartGoal={this.props.onStartGoal}
                goal={g}></Goal>)
        }
      </div>
    );
  }
}

export default Action;
