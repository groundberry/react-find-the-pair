import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  let wrapper;
  let winGame;

  beforeEach(() => {
    winGame = true;

    wrapper = shallow(<Header
      winGame={winGame}
    />);
  });

  it('renders a Header component', () => {
    expect(wrapper.find('.Header')).toHaveLength(1);
  });

  it('renders the text "You win!" when all the pairs have been found', () => {
    expect(wrapper.find('.Header').text()).toEqual('You win!');
  });
});
