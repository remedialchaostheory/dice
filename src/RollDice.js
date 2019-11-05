import React, { Component } from 'react';
import './RollDice.css';
import Die from "./Die";

class RollDice extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div className="RollDice">
          <div className="RollDice-die">
            <Die />
            <Die />
          </div>
          <button className="RollDice-button">Rolling</button>
        </div>
    );
  }
}

export default RollDice;
