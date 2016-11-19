import React from 'react';
import ProgressBar from 'react-progressbar.js';

class TimeCounter extends React.Component {
  constructor() {
    super();

    this.state = {
      timeRemaining: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    clearInterval(this.interval);

    this.setState({ timeRemaining: nextProps.timeRemaining });

    if (!nextProps.isOver) {
      this.startCounter();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.setState({ timeRemaining: this.props.timeRemaining });
    this.startCounter();
  }

  startCounter() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({ timeRemaining: this.state.timeRemaining - 1 });

    if (this.state.timeRemaining <= 0) {
      clearInterval(this.interval);
      this.props.onTimeEnded();
    }
  }

  render() {
    let Circle = ProgressBar.Circle,
        options = {
          strokeWidth: 4,
          color: '#2283f5',
          trailColor: '#364666',
          text: {
            style: {
              color: '#fff',
              position: 'absolute',
              left: '50%',
              top: '50%',
              padding: 0,
              margin: 0,
              transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
              }
            }
          }
        };

    let progress = this.state.timeRemaining / this.props.timeRemaining;

    return(
      <div>
        <Circle
          progress={progress}
          text={this.state.timeRemaining}
          options={options}
          containerClassName={'progressbar'} />
      </div>
    )
  }
}

export default TimeCounter;
