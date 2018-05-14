import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';

describe('<Cell />', () => {
  let wrapper;
  let content;
  const onClick = jest.fn();

  it('when not clicked', () => {
    content = '?';
    wrapper = shallow(<Cell
      content={content}
      coordinates={[0, 1]}
      showContent={false}
      onClick={onClick}
    />);
    it('renders a Cell component hyding the content of the cell', () => {
      expect(wrapper.find('.Cell--button')).toHaveLength(1);
    });
  });

  it('when clicked', () => {
    content = '🐸';
    wrapper = shallow(<Cell
      content={content}
      coordinates={[0, 1]}
      showContent
      onClick={onClick}
    />);

    it('renders a Cell component showing the content', () => {
      wrapper.find('.Cell--button').simulate('click');
      expect(onClick()).toHaveBeenCalled();
    });

    it('renders a Cell component showing the content', () => {
      wrapper.find('.Cell--button').simulate('click');
      expect(wrapper.find('.Cell').text()).toEqual(content);
    });
  });
});
