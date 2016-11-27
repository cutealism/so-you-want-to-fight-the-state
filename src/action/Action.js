import React, { Component } from 'react';

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

  render() {
    return <div>
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
