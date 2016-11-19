import React from 'react';

class SingleWord extends React.Component {
  constructor() {
    super();

    this.state = {
      shouldFlip: false
    };
  }

  flipIt() {
    this.setState({shouldFlip: true});
  }

  render() {
    setTimeout(this.flipIt.bind(this), 1000);

    return(
      <li className="covered-word">
        <span className={"covered-word__word " + (this.state.shouldFlip ? 'covered-word__word--hidden' : '')}>{this.props.word}</span>
        <span className={"covered-word__hashed " + (!this.state.shouldFlip ? 'covered-word__hashed--hidden' : '')}>{this.renderHashedWord()}</span>
      </li>
    )
  }

  renderHashedWord() {
    let wordLength = this.props.word.length,
      result = [];

    for (let i = 0; i < wordLength; i++) {
      result.push('*');
    }

    return result.join('');
  }
}

SingleWord.propTypes = {
  word: React.PropTypes.string.isRequired
};


export default SingleWord;
