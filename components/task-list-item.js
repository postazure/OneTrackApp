import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

export default class TaskListItem extends Component {

  render() {
    return (
      <Text
        style={styles.text}
      >{this.props.name}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'left',
    backgroundColor: 'brown'
  }
});
