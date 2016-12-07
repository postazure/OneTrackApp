/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './components/app.js'

export default class OneTrackApp extends Component {
  constructor() {
    super();
    this.fixtureTasks = {tasks: [
      {name: 'Active Task', active: true},
      {name: 'Inactive Task 1', active: false},
      {name: 'Inactive Task 2', active: false}
    ]};
  }
  render() {
    return (
      <View style={styles.container}>
        <App persistedState={this.fixtureTasks}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('OneTrackApp', () => OneTrackApp);
