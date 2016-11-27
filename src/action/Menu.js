import React, { Component } from 'react';

class Menu extends Component {

  renderTopic = (topic) => {
    return <div key={topic.title}>
        <h2>{topic.title}</h2>
        <p>{topic.description}</p>
        <div className="subgoals">
          {topic.goals.map(this.renderGoal)}
        </div>
    </div>
  }

  renderGoal = (goal) =>  {
    const isCompleated = !!this.props.completedGoals[goal.key]
    const badge = goal.draft ? "badges/comingSoon.gif" : `badges/${goal.key}.${isCompleated ? "gif" : "png"}`
    const onClick = () => this.props.onStartGoal(goal.key);
    return <div key={goal.key}>
            <p>
              <img src={badge} alt={goal.title + " badge"} onClick={onClick} /> 
              <br/>
              <button onClick={onClick}>{goal.title}</button>
            </p>
        </div>
  }

  render() {
    return <div>{this.props.topics.map(this.renderTopic)}</div>;
  }
}

export default Menu;
