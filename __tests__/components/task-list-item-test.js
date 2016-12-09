import React from 'react';
import ReactNative, {Text} from 'react-native';
import { shallow } from 'enzyme';
import TaskListItem from '../../components/task-list-item.js';

describe('TaskList', () => {
  it('should display a task name', () => {

    let subject = shallow(<TaskListItem name={'task name'} />);
    let item = subject.find(Text)
    expect(item.contains('task name')).toBeTruthy();
  });
})
