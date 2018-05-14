import React from 'react';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe('<Grid />', () => {
  let wrapper;
  let level;
  let grid;
  let pressedGrid;
  let onClick;

  beforeEach(() => {
    level = 1;
    grid = [
      ['🐸', '🦋'],
      ['🦋', '🐸'],
    ];
    pressedGrid = [[false, false], [false, false]];
    onClick = jest.fn();

    wrapper = shallow(<Grid
      level={level}
      grid={grid}
      pressedGrid={pressedGrid}
      onClick={onClick}
    />);
  });

  it('renders a grid of pairs', () => {
    expect(wrapper.find('.Grid')).toHaveLength(1);
  });
});
