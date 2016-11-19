//Libs
import React from 'react';

//Components
import Button from './Button';

class InputNumber extends React.Component {
  constructor() {
    super();

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleUserInput(evt) {
    evt.preventDefault();

    let userAnswer = this.userAnswer.value.toUpperCase();
    this.userAnswer.value = '';

    this.props.onUserInput(userAnswer);
  }

  handleReset() {
    this.props.onReset();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleUserInput}>
          <input
            pattern="[a-zA-Z ]+"
            type="text"
            placeholder="Type the sequence of words you remebered"
            ref={ (ref) => this.userAnswer = ref }
            className="input-field"
            required
            autoFocus />

          <Button>Submit</Button>
        </form>
      </div>
    )
  }
}

export default InputNumber;
