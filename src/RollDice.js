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
      rollingOut: false,
      rollingIn: false,
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
    this.setState({
      rolling: true,
      rollingOut: true,
    });
    setTimeout(e => {
      this.setState({
        die1: roll1,
        die2: roll2,
        rolling: false,
        rollingOut: false,
        rollingIn: true,
      });
      setTimeout(e => {
        this.setState({
          rolling: false,
          rollingIn: false,
        });
      }, 1000);
    }, 1000);
  };

  render() {
    return (
        <div className="RollDice">
          <div className="RollDice-die">
            <Die
                num={this.state.die1}
                rollingOut={this.state.rollingOut}
                rollingIn={this.state.rollingIn}
            />
            <Die
                num={this.state.die2}
                rollingOut={this.state.rollingOut}
                rollingIn={this.state.rollingIn}
            />
          </div>
          <button
              className={`RollDice-button ${this.state.rollingOut && 'rolling'}`}
              onClick={this.rollDie}
              disabled={this.state.rolling}
          >
            {this.state.rollingOut ? 'ROLLING...' : 'Let\'s Roll Dice !'}
          </button>
        </div>
    );
  }
}

export default RollDice;
