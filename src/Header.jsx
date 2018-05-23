import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header(props) {
  const { winGame } = props;
  return (
    <div className="Header">
      {winGame ? 'You win!' : ''}
    </div>
  );
}

Header.propTypes = {
  winGame: PropTypes.bool,
};

Header.defaultProps = {
  winGame: false,
};

export default Header;
