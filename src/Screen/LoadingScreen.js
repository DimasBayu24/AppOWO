import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';

export default class LoadingScreen extends Component {
  componentDidMount() {
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <View style={style.container}>
        <Text>Loading Screen</Text>
        <ActivityIndicator size="large" />
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
