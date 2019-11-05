import React, { Component } from 'react';
import './RollDice.css';
import Die from "./Die";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one',
      rolling: false,
    };
    this.rollDie = this.rollDie.bind(this);
  }
  rollDie = e => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      const numWords = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
      };
      const newRand = Math.floor(Math.random() * (max - min + 1)) + min;
      return numWords[newRand];
    }
    const roll1 = getRandomInt(1, 6);
    const roll2 = getRandomInt(1, 6);
    this.setState({rolling: true});
    setTimeout(e => {
      this.setState({die1: roll1, die2: roll2});
      this.setState({rolling: false});
    }, 1000);
  };

  render() {
    return (
        <div className="RollDice">
          <div className="RollDice-die">
            <Die num={this.state.die1}/>
            <Die num={this.state.die2}/>
          </div>
          <button className={`RollDice-button ${this.state.rolling ? 'rolling' : ''}`} onClick={this.rollDie}>
            rOLL dICE !
          </button>
        </div>
    );
  }
}

export default RollDice;
