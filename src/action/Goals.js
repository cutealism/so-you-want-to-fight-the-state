import React, { Component } from 'react';
import './Action.css';

class Goal extends Component {

  renderSubgoal = (g) =>  {
    const badge = "badges/signal.gif";
    //const badge = `badges/${g.badge}.${(g.goal.isCompleted ? "gif" : "png")}`
    const onClick = () => this.props.onStartGoal(g.badge);
    return <div key={g.goal}>
            <p>
                <img src={badge} alt={g.goal + " badge"} onClick={onClick} /> 
                <br/>
                <button onClick={onClick}>{g.goal}</button>
            </p>
        </div>
  }

  render() {
    return (
      <div className="Goal">
          <h2 key={this.props.goal.goal}>{this.props.goal.goal}</h2>
          <p>{this.props.goal.description}</p>
          <div className="subgoals">
            {this.props.goal.subgoals.map(this.renderSubgoal)}
          </div>
      </div>
    );
  }
}

export default Goal;
