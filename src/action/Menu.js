import React, { Component } from 'react';
import Badge from './Badge.js';

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
    const onClick = () => this.props.onStartGoal(goal.key);
    return <div key={goal.key}>
            <p>
              <Badge onClick={onClick} goal={goal.key} color={isCompleated} />
              <br/>
              <button onClick={onClick}>{goal.title}</button>
            </p>
        </div>
  }

  render() {
    return <div>
      {this.props.topics.map(this.renderTopic)}
      <footer>
        By <a href="http://cutealism.com/">Cutealism</a>.
      </footer>
    </div>;
  }
}

export default Menu;
