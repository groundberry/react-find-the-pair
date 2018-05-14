import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getWidth } from './utils/config';
import Cell from './Cell';
import './Grid.css';

class Grid extends Component {
  constructor() {
    super();

    this.renderCells = this.renderCells.bind(this);
  }

  renderCells() {
    const arrayOfCells = [];
    const { grid, pressedGrid, onClick } = this.props;

    for (let row = 0; row < grid.length; row += 1) {
      for (let col = 0; col < grid[row].length; col += 1) {
        const width = grid[row].length;
        const cellIndex = col + (row * width);
        const content = grid[row][col];
        const coordinates = [row, col];
        const showContent = pressedGrid[row][col];

        arrayOfCells.push(<Cell
          key={cellIndex}
          content={content}
          coordinates={coordinates}
          showContent={showContent}
          onClick={onClick}
        />);
      }
    }

    return arrayOfCells;
  }

  render() {
    const { level } = this.props;
    const width = getWidth(level);

    return (
      <div
        className="Grid"
        style={{ gridTemplateColumns: `repeat(${width}, 70px)` }}
      >
        {this.renderCells()}
      </div>
    );
  }
}

Grid.propTypes = {
  level: PropTypes.number.isRequired,
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  pressedGrid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Grid;
