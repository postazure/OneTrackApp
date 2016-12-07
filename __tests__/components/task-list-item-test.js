import React from 'react';
import ReactNative, {Text} from 'react-native';
import { shallow } from 'enzyme';
import TaskListItem from '../../components/task-list-item.js';

describe('TaskList', () => {
  it('should display a task name', () => {

    let subject = shallow(<TaskListItem name={'task name'} />);

    expect(subject.contains(
      <Text>task name</Text>
    )).toBeTruthy();
  });
})
