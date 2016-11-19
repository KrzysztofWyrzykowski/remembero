//Libs
import React from 'react';

//Components
import SingleWord from './SingleWord';

class QuestionsHistory extends React.Component {
  render() {
    return(
      <ul>
        {this.renderHashedState()}
      </ul>
    )
  }

  renderHashedState() {
    var wordsCount = this.props.gameState.length,
        result = [];

    for (let i = 0; i < wordsCount; i ++) {
      result.push(<SingleWord key={i} word={this.props.gameState[i]} />)
    }

    return result;
  }
}


export default QuestionsHistory;
