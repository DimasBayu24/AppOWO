import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class FavoriteScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Favorite Screen</Text>
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
