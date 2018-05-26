import React from 'react';
import { shallow } from 'enzyme';
import Settings from './Settings';

describe('Settings', () => {
  const onChange = jest.fn();
  const wrapper = shallow(<Settings onChange={onChange} />);
  it('renders a Settings component', () => {
    expect(wrapper.find('.Settings')).toHaveLength(1);
  });
});
