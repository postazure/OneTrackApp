import React from 'react';
import ReactNative from 'react-native';
import { shallow } from 'enzyme';
import TaskList from '../../components/task-list.js';
import TaskListItem from '../../components/task-list-item.js';

describe('TaskList', () => {
  it('should display tasks', () => {
    let tasks = [
      {name: 'task 1'},
      {name: 'task 2'}
    ]

    let subject = shallow(<TaskList tasks={tasks} />);

    expect(subject.contains([
      <TaskListItem name={'task 1'} />,
      <TaskListItem name={'task 2'} />
    ])).toBeTruthy();
  });

  it('should display only inactive tasks', () => {
    let tasks = [
      {name: 'task 1', active: false},
      {name: 'task 2', active: true}
    ]

    let subject = shallow(<TaskList tasks={tasks} />);

    expect(subject.contains(<TaskListItem name={'task 1'} />)).toBeTruthy();
    expect(subject.contains(<TaskListItem name={'task 2'} />)).not.toBeTruthy();
  });
})
