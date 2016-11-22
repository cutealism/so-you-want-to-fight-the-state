import React, { Component } from 'react';
import './Action.css';

class Goal extends Component {
  render() {
    return (
      <div className="Goal">
          <h2 key={this.props.goal.goal}>{this.props.goal.goal}</h2>
          {this.props.goal.subgoals.map((g) => <button key={g.goal} onClick={() => this.props.onStartGoal(g.badge)}>{g.goal}</button>)}
      </div>
    );
  }
}

export default Goal;
