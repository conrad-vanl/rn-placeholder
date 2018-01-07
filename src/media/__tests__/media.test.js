import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import Media from './../media';

/** @test {Media#render} */
describe('Media#render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Media />);
  });

  it('should own a props style that matches the default style', () => {
    const style = {
      height: 40,
      width: 40,
      backgroundColor: '#efefef',
      borderRadius: 12 / 4,
    };
    expect(wrapper.find(View).prop('style')).toEqual(style);
  });

  it('should own a props style that matches the props', () => {
    wrapper = shallow(<Media size={70} color="red" hasRadius />);
    const style = {
      height: 70,
      width: 70,
      backgroundColor: 'red',
      borderRadius: 35,
    };
    expect(wrapper.find(View).prop('style')).toEqual(style);
  });

  it('should allow the passing of arbitary styles', () => {
    wrapper = shallow(<Media style={{ marginTop: 50, flexGrow: 2 }} />);
    const style = {
      marginTop: 50,
      flexGrow: 2,
    };
    expect(wrapper.find(View).prop('style')).toEqual(expect.objectContaining(style));
  });
});
