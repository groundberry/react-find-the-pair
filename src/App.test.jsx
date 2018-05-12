import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders the name of the App', () => {
    expect(wrapper.find('h1').text()).toEqual('Find the pair');
  });
});
