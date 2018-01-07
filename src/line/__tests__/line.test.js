import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import Line from './../line';

/** @test {Line#render} */
describe('Line#render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Line textSize={12} color="#efefef" width="100%" />);
  });

  it('should have a style props equals to the default one', () => {
    const style = {
      alignSelf: 'stretch',
      height: 12,
      width: '100%',
      borderRadius: 3,
      backgroundColor: '#efefef',
    };
    expect(wrapper.find(View).prop('style')).toEqual(style);
  });

  it('should allow the passing of arbitary styles', () => {
    wrapper = shallow(<Line style={{ marginTop: 50, flexGrow: 2 }} />);
    const style = {
      marginTop: 50,
      flexGrow: 2,
    };
    expect(wrapper.find(View).prop('style')).toEqual(expect.objectContaining(style));
  });
});
