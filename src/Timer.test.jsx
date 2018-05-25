import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('<Timer />', () => {
  const wrapper = shallow(<Timer timeStart={1001} timeEnd={1200} />);

  it('renders a Timer component', () => {
    expect(wrapper.find('.Timer')).toHaveLength(1);
  });
});
