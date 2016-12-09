import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import NewTaskForm from './new-task-form.js'
import CurrentTask from './current-task.js'
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
        <CurrentTask />
        <NewTaskForm />
        <TaskList tasks={this.state.tasks}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-around',
    backgroundColor: '#F5FCFF',
  }
});
