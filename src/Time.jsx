import React from 'react';
import PropTypes from 'prop-types';
import './Time.css';

function Time(props) {
  const seconds = Math.floor(props.time % 60).toString().padStart(2, '0');
  const minutes = Math.floor(props.time / 60).toString().padStart(2, '0');

  return (
    <div className="Time">
      {minutes}:{seconds}
    </div>
  );
}

Time.propTypes = {
  time: PropTypes.number,
};

Time.defaultProps = {
  time: 0,
};


export default Time;
