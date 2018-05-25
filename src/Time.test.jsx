import React from 'react';
import { shallow } from 'enzyme';
import Time from './Time';

describe('<Time />', () => {
  const wrapper = shallow(<Time time={1001} />);

  it('renders a Time component', () => {
    expect(wrapper.find('.Time')).toHaveLength(1);
  });
});
