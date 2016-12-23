import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    const {showBack, showRestart, onBack, onRestart} = this.props;
    return <div className="navigation">
        {showBack && <a onClick={onBack}>&lt; Back</a>}
        {" "}
        {showRestart && <a onClick={onRestart}>Restart</a>}
    </div>;
  }
}

export default Navigation;
