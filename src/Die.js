import React, { Component } from 'react';
import './RollDice.css';

class Die extends Component {
  render() {
    return (
        <div className="Die">
          <i className={`fas fa-10x fa-dice-${this.props.num}`}></i>
        </div>
    );
  }
}

export default Die;
