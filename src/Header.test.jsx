import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  let wrapper;
  let onChangeSpy;
  let onClickSpy;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    onClickSpy = jest.fn();

    wrapper = shallow(<Header
      level={1}
      timeStart={1001}
      timeEnd={1200}
      bestScore={34}
      onChange={onChangeSpy}
      onClick={onClickSpy}
    />);
  });

  it('renders a Header component', () => {
    expect(wrapper.find('.Header')).toHaveLength(1);
  });
});
