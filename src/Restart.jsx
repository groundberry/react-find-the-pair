import React from 'react';
import PropTypes from 'prop-types';
import './Restart.css';

function Restart(props) {
  return (
    <button className="Restart" onClick={props.onClick} >Play again</button>
  );
}

Restart.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Restart;
