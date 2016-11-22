import React, { Component } from 'react';
import './Action.css';
import Goal from './Goals';

class Action extends Component {
  render() {
    return (
      <div className="Action">
        <h2>{this.props.step.title}</h2>
        <p>{this.props.step.description}</p>
        {this.props.step.next_steps && this.props.step.next_steps.map((s) =>
            <button
                key={s.step}
                onClick={() => this.props.onNextStep(s.step)}>
              {s.prompt}</button>)
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
