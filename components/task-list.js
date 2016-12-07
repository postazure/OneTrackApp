
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
      <View>
      {tasks}
      </View>
    );
  }
}
