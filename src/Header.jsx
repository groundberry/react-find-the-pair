import React from 'react';
import PropTypes from 'prop-types';
import Restart from './Restart';
import Timer from './Timer';
import Settings from './Settings';
import './Header.css';

function Header(props) {
  return (
    <div className="Header">
      <Settings level={props.level} onChange={props.onChange} />
      <Timer timeStart={props.timeStart} timeEnd={props.timeEnd} bestScore={props.bestScore} />
      <Restart onClick={props.onClick} />
    </div>
  );
}

Header.propTypes = {
  level: PropTypes.number.isRequired,
  timeStart: PropTypes.number,
  timeEnd: PropTypes.number,
  bestScore: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  timeStart: 0,
  timeEnd: 0,
  bestScore: 0,
};

export default Header;
