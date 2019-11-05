import React, { Component } from 'react';
import './RollDice.css';

class Die extends Component {
  render() {
    return (
        <div className="Die">
          <i className="fas fa-dice-one fa-10x"></i>
        </div>
    );
  }
}

export default Die;
