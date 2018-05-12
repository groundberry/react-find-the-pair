import React from 'react';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe('<Grid />', () => {
  let wrapper;
  let level;
  let grid;

  beforeEach(() => {
    level = 1;
    grid = [
      ['🐸', '🦋'],
      ['🦋', '🐸'],
    ];
    wrapper = shallow(<Grid level={level} grid={grid} />);
  });

  it('renders a grid of pairs', () => {
    expect(wrapper.find('.Grid')).toHaveLength(1);
  });
});
