import React, { Component } from 'react';
import './RollDice.css';

class Die extends Component {
  render() {
    return (
        <div className={`Die ${this.props.rolling ? 'animated rollOut' : ''}`}>
          <i className={`fas fa-10x fa-dice-${this.props.num}`}></i>
        </div>
    );
  }
}

export default Die;
