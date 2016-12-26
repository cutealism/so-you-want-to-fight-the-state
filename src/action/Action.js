import React, { Component } from 'react';
import Badge from './Badge.js';
import ReactDOM from 'react-dom'

class Action extends Component {

  onNextStepSelect = (data) => {
      if (data.step) {
          this.props.onNextStep(data.step);
      } else if (data.goal) {
          this.props.onStartGoal(data.goal);
      } else if (data.restart) {
          this.props.onRestart();
      }
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this)
      .querySelectorAll('a')
      .forEach(e => e.setAttribute('target', '_blank'));
  }

  render() {
    return <div>
        {this.props.data.action && this.props.data.action.type === 'award' && <Badge goal={this.props.goal} color={true} />}
        <p dangerouslySetInnerHTML={{__html: this.props.data.description}}></p>
        {this.props.data.nextSteps && this.props.data.nextSteps.map((prompt) =>
            <button
                key={prompt.step || prompt.goal || "restart"}
                onClick={() => this.onNextStepSelect(prompt)}>
              {prompt.prompt}</button>)
        }
      </div>
  }
}

export default Action;
