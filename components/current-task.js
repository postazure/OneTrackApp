
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class CurrentTask extends Component {
  foobar(){
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>[CurrentTask]</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .25,
    alignItems: 'center',
    backgroundColor: 'blue',
  }
});
