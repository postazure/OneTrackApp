import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import NewTaskForm from './new-task-form.js'
import TaskList from './task-list.js'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: props.persistedState.tasks || []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NewTaskForm />
        <TaskList tasks={this.state.tasks}/>
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
