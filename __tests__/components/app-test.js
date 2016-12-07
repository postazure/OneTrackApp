import React from 'react';
import ReactNative from 'react-native';
import { shallow } from 'enzyme';
import App from '../../components/app.js';

describe('App', () => {
  describe('state', () => {
    it('should have defaults', () => {
      let subject = shallow(<App />);
      let state = subject.state();
      expect(state.tasks).toEqual([])
    });
  })
})
