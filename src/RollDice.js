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
          <Die />
          <Die />
        </div>
    );
  }
}

export default RollDice;
