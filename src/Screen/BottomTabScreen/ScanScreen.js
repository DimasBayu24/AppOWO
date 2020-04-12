import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';

import {RNCamera as Camera} from 'react-native-camera';

export default class ScanScreen extends Component {
  onSuccess = phoneNumber => {
    this.props.navigation.navigate('TransQR', {
      phoneNumber: phoneNumber.data,
    });
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        // flashMode={Camera.Constants.FlashMode.torch}
        topContent={
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginBottom: 40,
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <IconEntypo name="cross" size={25} style={{marginLeft: 20}} />
            </TouchableOpacity>
            <Text>Scan untuk mengirim OWO cash</Text>
            <Icon name="flash" size={25} style={{marginRight: 20}} />
          </View>
        }
        bottomContent={
          <View style={{marginTop: 50}}>
            <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
              Cara bayar lainnya
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 5,
                marginLeft: 30,
              }}>
              <TouchableOpacity
                style={{
                  padding: 5,
                  backgroundColor: 'white',
                  elevation: 2,
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}>
                <Icon name="phone" size={25} />
                <Text style={{marginLeft: 15}}>Nomor HP</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 5,
                  backgroundColor: 'white',
                  elevation: 2,
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}>
                <Icon name="barcode" size={25} />
                <Text style={{marginLeft: 15}}>Barcode</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

AppRegistry.registerComponent('default', () => ScanScreen);
