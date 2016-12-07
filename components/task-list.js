
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import TaskListItem from './task-list-item.js'

export default class TaskList extends Component {
  render() {
    let tasks = this.props.tasks
      .filter(task => !task.active)
      .map(task => {
        return (
          <TaskListItem name={task.name} key={task.name}/>
        )
      });
    
    return (
      <View style={styles.container}>
      {tasks}
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
