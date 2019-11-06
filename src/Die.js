import React, { Component } from 'react';
import './RollDice.css';

class Die extends Component {
  render() {
    return (
        <div className={
          `Die 
          ${this.props.rollingOut && 'animated faster rollOut'}
          ${this.props.rollingIn && 'animated rollIn'}`
        }>
          <i className={`fas fa-10x fa-dice-${this.props.num}`}></i>
        </div>
    );
  }
}

export default Die;
