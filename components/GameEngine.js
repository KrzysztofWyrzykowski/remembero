//Libs
import React from 'react';
import _ from 'lodash';

//Components
import QuestionsHistory from './QuestionsHistory/QuestionsHistory';
import InputText from './InputText';
import TimeCounter from './TimeCounter';
import Instruction from './Instruction';
import Logo from './Logo';
import Score from './Score';
import Level from './Level';
import CurrentQuestion from './CurrentQuestion';
import EndScreen from './EndScreen';

class GameEngine extends React.Component {
  constructor() {
    super();

    this.state = {
      currentQuestion: this.randomText(2),
      gameState: [],
      level: 1,
      points: 100,
      isOk: true,
      time: 10
    };

    this.compareUserInput = this.compareUserInput.bind(this);
    this.onTimeEndend = this.onTimeEndend.bind(this);
  }

  randomText(length) {
    let result = [];
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for(var i = 0; i < length; i++) {
      const randomValue = Math.floor(Math.random() * possible.length);

      result.push(possible.charAt(randomValue));
    }

    return result.join('');
  }

  compareUserInput(userAnswer) {
    let level = this.state.level,
      points = this.state.points,
      tempGameState = this.state.gameState,
      currentState = userAnswer.split(' '),
      isOk = this.state.isOk,
      time = this.state.time;

    let isCorrect = false;

    tempGameState.push(currentState[currentState.length - 1]);

    if (tempGameState.length > 1) {
      isCorrect = _.isEqual(tempGameState, currentState);
    } else {
      isCorrect = this.state.currentQuestion === userAnswer;
    }

    if (isCorrect) {
      ++level;
      points += level * 30;
    } else {
      isOk = false;
    }

    this.setState({
      currentQuestion: this.randomText(Math.ceil(level * 0.5) + 1),
      level,
      gameState: tempGameState,
      points,
      isOk,
      time: time + level
    });
  }

  onTimeEndend() {
    this.setState({
      isOk: false
    })
  }

  render() {
    let isOver = !this.state.isOk;

    return(
      <div className="layout" >
        <div className="layout__wrapper">
          <header className="header">
            <Logo />
          </header>

          <div className="layout__left">
            <Score points={this.state.points} />
            <TimeCounter timeRemaining={this.state.time} onTimeEnded={this.onTimeEndend} isOver={isOver}/>
          </div>

          <div className="layout__right">
            <Level level={this.state.level} />
          </div>

          <div className="layout__center">
            <div className="layout__section layout__section--small">
              <Instruction level={this.state.level} />
            </div>

            <div className="layout__section layout__section--small">
              <QuestionsHistory gameState={this.state.gameState} />
            </div>

            <div className="layout__section">
              <CurrentQuestion question={this.state.currentQuestion} />
            </div>

            <div className="layout__section">
              {!isOver && <InputText onUserInput={this.compareUserInput} />}
            </div>
          </div>
        </div>
        {isOver && <EndScreen level={this.state.level} points={this.state.points} />}
      </div>
    )
  }
}

export default GameEngine;
