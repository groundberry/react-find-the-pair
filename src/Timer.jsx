import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Time from './Time';
import './Timer.css';

class Timer extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  render() {
    const { timeStart, timeEnd, bestScore } = this.props;
    const currentTime = Date.now();
    let time = 0;

    if (timeStart !== null) {
      time = Math.round((currentTime - timeStart) / 1000);
    }

    if (timeEnd !== null) {
      time = Math.round((timeEnd - timeStart) / 1000);
    }

    return (
      <div className="Timer">
        <h1 className="Timer--header">Timer:
          <Time
            time={time}
          />
          {(time !== 0 && time === bestScore) ? ' Best score!' : ''}
        </h1>
      </div>
    );
  }
}

Timer.propTypes = {
  timeStart: PropTypes.number,
  timeEnd: PropTypes.number,
  bestScore: PropTypes.number,
};

Timer.defaultProps = {
  timeStart: 0,
  timeEnd: PropTypes.number,
  bestScore: PropTypes.number,
};

export default Timer;
