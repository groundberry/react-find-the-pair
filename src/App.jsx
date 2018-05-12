import React, { Component } from 'react';
import { getGrid } from './utils/grid';
import Grid from './Grid';
import './App.css';

class App extends Component {
  constructor() {
    super();

    const level = 1;
    const grid = getGrid(level);

    this.state = {
      level,
      grid,
    };
  }

  render() {
    const { level, grid } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Find the pair</h1>
        </header>
        <Grid level={level} grid={grid} />
      </div>
    );
  }
}

export default App;
