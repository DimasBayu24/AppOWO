import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/logo-box.png';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TopUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.containerTopNavbar}>
            <View style={styles.topNavbar}>
              <Icon
                onPress={() => this.props.navigation.navigate('Home')}
                name="arrow-left"
                color="white"
                size={25}
              />
              <Text style={styles.textTopNavbar}>Top Up</Text>
            </View>
          </View>
          <View style={styles.boxUpper}>
            <View style={styles.containerTextTitle}>
              <Text style={styles.textTitle}>Top Up ke</Text>
            </View>
            <View style={styles.containerButtonCash}>
              <TouchableOpacity style={styles.buttonCash}>
                <Image source={Logo} style={styles.iconOwo} />
                <View style={styles.textCash}>
                  <Text>OVO Cash</Text>
                  <Text>Saldo Rp21.300</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.boxMiddle}>
            <View style={styles.containerTextTitle}>
              <Text style={styles.textTitle}>Pilih Nominal Top Up</Text>
            </View>
            <View style={styles.containerButtonBalance}>
              <TouchableOpacity style={styles.buttonBalance1}>
                <Text style={styles.textBalance}>Rp100.000</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonBalance2}>
                <Text style={styles.textBalance}>Rp200.000</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonBalance3}>
                <Text style={styles.textBalance}>Rp500.000</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerTextInputBalance}>
              <Text style={styles.textInputBalance}>
                Atau masukan nominal top up disini
              </Text>

              <View style={styles.containerTextInputBox}>
                <TextInput
                  placeholder="Minimal Rp10.000"
                  placeholderTextColor="#9A97A9"
                  keyboardType="numeric"
                  style={styles.textInputBox}
                />
              </View>
            </View>
            <View style={styles.containerButtonSubmit}>
              <TouchableOpacity style={styles.buttonSubmit}>
                <Text style={styles.textSubmit}>Top Up sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5D9DF',
    height: '100%',
    width: '100%',
  },
  ScrollView: {
    height: '100%',
  },
  containerTopNavbar: {
    backgroundColor: '#53338C',
    paddingBottom: '12%',
  },
  topNavbar: {
    flexDirection: 'row',
    marginLeft: '7%',
    top: '6%',
  },
  textTopNavbar: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginLeft: '5%',
  },
  boxUpper: {
    backgroundColor: 'white',
    width: '100%',
    height: '29%',
  },
  containerTextTitle: {
    marginTop: '10%',
  },
  iconOwo: {
    width: '20%',
    height: '60%',
    borderRadius: 5,
    top: '3%',
  },
  textCash: {
    left: 10,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: '9%',
    top: -10,
  },
  containerButtonCash: {
    padding: '8%',
  },
  buttonCash: {
    top: '-7%',
    flexDirection: 'row',
    borderColor: '#b9b9b9',
    borderRadius: 10,
    padding: '5%',
    backgroundColor: 'white',
    elevation: 10,
  },
  boxMiddle: {
    marginTop: '3%',
    backgroundColor: 'white',
    width: '100%',
    height: '80%',
  },
  containerButtonBalance: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '6%',
    top: '-3%',
  },
  buttonBalance1: {
    borderColor: '#b9b9b9',
    borderRadius: 30,
    padding: '5%',
    backgroundColor: 'white',
    elevation: 10,
    marginHorizontal: '35%',
  },
  buttonBalance2: {
    borderColor: '#b9b9b9',
    borderRadius: 30,
    padding: '5%',
    backgroundColor: 'white',
    elevation: 10,
    marginHorizontal: '35%',
  },
  buttonBalance3: {
    borderColor: '#b9b9b9',
    borderRadius: 30,
    padding: '5%',
    backgroundColor: 'white',
    elevation: 10,
    marginHorizontal: '35%',
  },
  textBalance: {
    textAlign: 'center',
    fontSize: 12,
  },
  containerTextInputBalance: {
    marginTop: '2%',
  },
  textInputBalance: {
    color: '#9A97A9',
    fontSize: 14,
    marginLeft: '9%',
    top: -20,
    fontSize: 12,
  },
  containerTextInputBox: {
    top: -15,
  },
  textInputBox: {
    borderRadius: 8,
    padding: '3%',
    marginHorizontal: '8%',
    backgroundColor: '#D5D9DF',
  },
  containerButtonSubmit: {
    backgroundColor: 'white',
    elevation: 30,
    width: '100%',
    height: '30%',
    marginTop: '23%',
    top: '-10%',
    justifyContent: 'center',
  },
  buttonSubmit: {
    top: '10%',
    marginHorizontal: '5%',
    borderRadius: 20,
    top: '-20%',
    padding: '3%',
    backgroundColor: '#D5D9DF',
  },
  textSubmit: {
    color: 'white',
    textAlign: 'center',
  },
});
