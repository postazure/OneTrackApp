import React from 'react';
import ReactNative from 'react-native';
import { shallow } from 'enzyme';
import App from '../../components/app.js';
import NewTaskForm from '../../components/new-task-form.js';
import TaskList from '../../components/task-list.js';

describe('App', () => {
  describe('state', () => {
    it('should have defaults', () => {
      let subject = shallow(<App persistedState={{}} />);
      let state = subject.state();
      expect(state.tasks).toEqual([])
    });
  })

  describe('New Task Form', () => {
    it('should have a new task form', () => {
      let subject = shallow(<App persistedState={{}} />);
      expect(subject.contains(<NewTaskForm/>)).toBeTruthy();
    });
  })

  describe('Task List', () => {
    it('should have a task list', () => {
      let tasks = [
        {name: 'active task', active: true},
        {name: 'inactive task 1', active: false},
        {name: 'inactive task 2', active: false},
      ];
      let persistedState = {
        tasks: tasks
      };

      let subject = shallow(<App persistedState={persistedState}/>);
      expect(subject.contains(<TaskList tasks={tasks}/>)).toBeTruthy();
    });
  })
})
