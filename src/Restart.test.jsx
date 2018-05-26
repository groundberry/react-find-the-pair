import React from 'react';
import { shallow } from 'enzyme';
import Restart from './Restart';

describe('Restart', () => {
  const onClick = jest.fn();
  const wrapper = shallow(<Restart onClick={onClick} />);
  it('renders a Restart component', () => {
    expect(wrapper.find('.Restart')).toHaveLength(1);
  });
});
