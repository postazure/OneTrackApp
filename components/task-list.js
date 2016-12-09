
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
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
      <Text style={styles.title}>To do</Text>
      {tasks}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'flex-start',
    backgroundColor: 'green',
  },
  title: {
    textAlign: 'center',
    fontSize: 30
  }
});
