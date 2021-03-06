import React, { Component } from 'react';
import Menu from './Menu';
import Action from './Action';

class Step extends Component {

  renderByType() {
    switch(this.props.data.type) {
      case 'menu':
        return <Menu
                onStartGoal={this.props.onStartGoal}
                completedGoals={this.props.completedGoals}
                topics={this.props.data.topics}></Menu>
      default:
        return <Action
            onNextStep={this.props.onNextStep}
            onStartGoal={this.props.onStartGoal}
            onRestart={this.props.onRestart}
            data={this.props.data}
            goal={this.props.goal}/>
    }
  }

  render() {
    return <div>{this.renderByType()}</div>
  }
}

export default Step;
