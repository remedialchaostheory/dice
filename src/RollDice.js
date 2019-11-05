import React, { Component } from 'react';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div>
          <i className="fas fa-dice-one fa-10x"></i>
        </div>
    );
  }
}

export default RollDice;
