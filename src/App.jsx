import React, { Component } from 'react';
import {
  getGrid,
  getPressedGrid,
} from './utils/grid';
import {
  cloneGrid,
  cloneArray,
} from './utils/array';
import Grid from './Grid';
import './App.css';

class App extends Component {
  constructor() {
    super();

    const level = 1;
    const grid = getGrid(level);
    const pressedGrid = getPressedGrid(level);

    this.state = {
      level,
      grid,
      pressedGrid,
      discoveredCells: [],
      discoveredCellsCoordinates: [],
    };

    this.handleClickUpdatePressedGrid = this.handleClickUpdatePressedGrid.bind(this);
    this.removeWrongPairs = this.removeWrongPairs.bind(this);
  }

  handleClickUpdatePressedGrid([row, col]) {
    this.setState((prevState) => {
      const grid = cloneGrid(prevState.grid);
      const newUpdatePressedGrid = cloneGrid(prevState.pressedGrid);
      let newDiscoveredCells = cloneArray(prevState.discoveredCells);
      const newDiscoveredCellsCoordinates = cloneArray(prevState.discoveredCellsCoordinates);

      newUpdatePressedGrid[row][col] = true;
      newDiscoveredCells.push(grid[row][col]);
      newDiscoveredCellsCoordinates.push([row, col]);

      for (let i = newDiscoveredCells.length - 1; i >= 0; i -= 2) {
        if (newDiscoveredCells.length > 1 &&
          (newDiscoveredCells.length % 2) === 0 &&
          (newDiscoveredCells[i] !== newDiscoveredCells[i - 1])) {
          setTimeout(() => {
            this.removeWrongPairs();
          }, 1000);
          newDiscoveredCells = [];
        }
      }

      return {
        pressedGrid: newUpdatePressedGrid,
        discoveredCells: newDiscoveredCells,
        discoveredCellsCoordinates: newDiscoveredCellsCoordinates,
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
    const { level, grid, pressedGrid } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Find the pair</h1>
        </header>
        <Grid
          level={level}
          grid={grid}
          pressedGrid={pressedGrid}
          onClick={this.handleClickUpdatePressedGrid}
        />
      </div>
    );
  }
}

export default App;
