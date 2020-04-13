import React, {Component} from 'react';
import {ImageBackground, StatusBar, StyleSheet} from 'react-native';

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(async () => {
      this.props.navigation.navigate('Login');
    }, 3000);
  }
  render() {
    return (
      <ImageBackground
        source={require('../../assets/Splash_Screen.png')}
        style={style.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#4D2A86"
          translucent={true}
        />
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
