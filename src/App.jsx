/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import { getGrid, getPressedGrid } from './utils/grid';
import { cloneGrid, cloneArray } from './utils/array';
import { getWidth, getHeight } from './utils/config';
import Grid from './Grid';
import Header from './Header';
import Timer from './Timer';
import Score from './Score';
import './App.css';

class App extends Component {
  constructor() {
    super();

    const level = 2;
    const grid = getGrid(level);
    const pressedGrid = getPressedGrid(level);

    this.state = {
      level,
      grid,
      pressedGrid,
      discoveredCells: [],
      discoveredCellsCoordinates: [],
      winGame: false,
      timeStart: null,
      timeEnd: null,
      scores: [],
      bestScore: null,
    };

    this.handleClickUpdatePressedGrid = this.handleClickUpdatePressedGrid.bind(this);
    this.removeWrongPairs = this.removeWrongPairs.bind(this);
  }

  handleClickUpdatePressedGrid([row, col]) {
    const { level } = this.state;
    const height = getHeight(level);
    const width = getWidth(level);

    this.setState((prevState) => {
      const grid = cloneGrid(prevState.grid);
      const newUpdatePressedGrid = cloneGrid(prevState.pressedGrid);
      const newDiscoveredCells = cloneArray(prevState.discoveredCells);
      const newDiscoveredCellsCoordinates = cloneArray(prevState.discoveredCellsCoordinates);
      const numberOfCells = height * width;
      const newScores = cloneArray(prevState.scores);

      let isWinGame = false;
      let start;
      let end;
      let time;
      let bestScore;

      newUpdatePressedGrid[row][col] = true;
      newDiscoveredCells.push(grid[row][col]);
      newDiscoveredCellsCoordinates.push([row, col]);

      if (prevState.timeStart === null) {
        start = Date.now();
      } else {
        start = prevState.timeStart;
      }

      for (let i = newDiscoveredCells.length - 1; i >= 0; i -= 2) {
        if (
          newDiscoveredCells.length > 1 &&
          newDiscoveredCells.length % 2 === 0 &&
          newDiscoveredCells[i] !== newDiscoveredCells[i - 1]
        ) {
          setTimeout(() => {
            this.removeWrongPairs();
          }, 1000);
        }
      }

      if (newDiscoveredCells.length === numberOfCells) {
        isWinGame = true;
        end = Date.now();
        time = Math.floor((end - start) / 1000);
        newScores.push(time);
        const lowestTime = newScores.sort()[0];
        bestScore = lowestTime;
      } else {
        end = null;
      }

      return {
        pressedGrid: newUpdatePressedGrid,
        discoveredCells: newDiscoveredCells,
        discoveredCellsCoordinates: newDiscoveredCellsCoordinates,
        winGame: isWinGame,
        timeStart: start,
        timeEnd: end,
        scores: newScores,
        bestScore,
      };
    });
  }

  removeWrongPairs() {
    this.setState((prevState) => {
      const newUpdatePressedGrid = cloneGrid(prevState.pressedGrid);
      const newDiscoveredCells = cloneArray(prevState.discoveredCells);
      const newDiscoveredCellsCoordinates = cloneArray(prevState.discoveredCellsCoordinates);
      const secondCellIndex =
        newDiscoveredCellsCoordinates[newDiscoveredCellsCoordinates.length - 1];
      const firstCellIndex =
        newDiscoveredCellsCoordinates[newDiscoveredCellsCoordinates.length - 2];

      newDiscoveredCells.pop();
      newDiscoveredCells.pop();
      newUpdatePressedGrid[firstCellIndex[0]][firstCellIndex[1]] = false;
      newUpdatePressedGrid[secondCellIndex[0]][secondCellIndex[1]] = false;
      newDiscoveredCellsCoordinates.pop();
      newDiscoveredCellsCoordinates.pop();

      return {
        pressedGrid: newUpdatePressedGrid,
        discoveredCells: newDiscoveredCells,
        discoveredCellsCoordinates: newDiscoveredCellsCoordinates,
      };
    });
  }

  render() {
    const {
      level,
      grid,
      pressedGrid,
      winGame,
      timeStart,
      timeEnd,
      bestScore,
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Find the pair</h1>
        </header>
        <Timer timeStart={timeStart} timeEnd={timeEnd} />
        <Header winGame={winGame} />
        <Grid
          level={level}
          grid={grid}
          pressedGrid={pressedGrid}
          onClick={this.handleClickUpdatePressedGrid}
        />
        {bestScore ? <Score bestScore={bestScore} /> : ''}
      </div>
    );
  }
}

export default App;
