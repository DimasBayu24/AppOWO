import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import {login} from '../../Redux/Actions/Auth';

const mapStateToProps = auth => {
  return {
    auth,
  };
};

class PinLoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      pinNumber: '',
    };
  }

  loginId = () => {
    const {pinNumber} = this.state;

    const phoneNumber = this.props.navigation.getParam('phoneNumber', '');

    const user = {
      phoneNumber,
      pinNumber,
    };
    this.props.dispatch(login(user, this.props.navigation));
  };

  buttonLogin = () => {
    this.loginId();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTopNavbar}>
          <TouchableOpacity style={styles.topNavbar}>
            <Icon
              name="arrow-left"
              color="white"
              size={21}
              style={{marginLeft: '5%'}}
            />
            <Text style={{fontSize: 16, marginLeft: '10%', color: 'white'}}>
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textTitle}>
          <Text style={styles.textInputCode}>Masukkan Security Code Anda</Text>
        </View>
        <View style={styles.textDetail}>
          <Text style={{textAlign: 'center', fontSize: 12}}>
            {`Security Code digunakan untuk masuk ke akun.\nAnda dan bentransaksi`}
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.containerTextInput}>
            <OTPInputView
              style={{width: '70%', height: 200, top: -100}}
              pinCount={6}
              autoFocusOnLoad
              secureTextEntry={true}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={pinNumber => {
                console.log('type', typeof pinNumber);
                console.log(pinNumber);
                console.log(`Code is ${pinNumber}, you are good to go!`);
                this.setState({pinNumber});
              }}
            />
          </View>
          <View style={styles.containerButtonSubmit}>
            <TouchableOpacity
              onPress={this.buttonLogin}
              style={styles.buttonSubmit}>
              <Text style={{textAlign: 'center', color: 'white'}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(PinLoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTopNavbar: {
    backgroundColor: '#4D2A86',

    paddingBottom: '17%',

    alignContent: 'center',
  },
  topNavbar: {
    flexDirection: 'row',
    top: '12%',
  },
  textTitle: {
    paddingBottom: '2%',
    marginTop: '10%',
  },

  containerTextInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '20%',
  },
  containerButtonSubmit: {
    marginTop: '10%',
  },
  buttonSubmit: {
    marginHorizontal: '10%',
    borderRadius: 30,
    padding: '5%',
    backgroundColor: '#11AFB8',
  },
  textInputCode: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#53338C',
  },

  borderStyleBase: {
    width: 30,
    height: 90,
    fontSize: 20,
  },

  borderStyleHighLighted: {
    borderColor: 'black',
    fontSize: 20,
  },

  underlineStyleBase: {
    width: 30,
    height: 90,
    borderWidth: 0,
    borderBottomWidth: 3,
    borderColor: 'black',
    color: 'black',
    fontSize: 60,
  },

  underlineStyleHighLighted: {
    borderColor: '#11AFB8',
    color: 'black',
    fontSize: 30,
  },
});
