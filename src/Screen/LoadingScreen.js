import React, {Component} from 'react';
import {ImageBackground, StyleSheet, ActivityIndicator} from 'react-native';

export default class LoadingScreen extends Component {
  componentDidMount() {
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <ImageBackground
        source={require('../../assets/Splash_Screen.png')}
        style={style.container}>
        <ActivityIndicator size="large" />
      </ImageBackground>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
