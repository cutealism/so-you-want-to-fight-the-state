import React, { Component } from 'react';

class Badge extends Component {

  render() {
    const {goal, color, onClick} = this.props;
    const badge = `badges/${goal}.${color ? "gif" : "png"}`
    return <img src={badge} alt={goal + " badge"} onClick={onClick} /> 
  }
}

export default Badge;
