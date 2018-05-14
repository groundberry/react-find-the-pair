import React, { Component } from 'react';
import {
  getGrid,
  getPressedGrid,
} from './utils/grid';
import { cloneGrid } from './utils/array';
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
    };

    this.handleClickUpdatePressedGrid = this.handleClickUpdatePressedGrid.bind(this);
  }

  handleClickUpdatePressedGrid([row, col]) {
    this.setState((prevState) => {
      const newUpdatePressedGrid = cloneGrid(prevState.pressedGrid);

      newUpdatePressedGrid[row][col] = true;

      return {
        pressedGrid: newUpdatePressedGrid,
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
