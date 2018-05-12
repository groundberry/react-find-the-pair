import React from 'react';
import PropTypes from 'prop-types';
import { getWidth } from './utils/config';
import './Grid.css';

function Grid(props) {
  const { level, grid } = props;
  const width = getWidth(level);

  return (
    <div
      className="Grid"
      style={{ gridTemplateColumns: `repeat(${width}, 25px)` }}
    >
      {grid}
    </div>
  );
}

Grid.propTypes = {
  level: PropTypes.number.isRequired,
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Grid;
