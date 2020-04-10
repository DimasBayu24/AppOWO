import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class TopupScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Topup Screen</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
