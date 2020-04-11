import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import {login} from '../../Redux/Actions/Auth';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

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
    // const {navigation} = this.props;

    const phoneNumber = this.props.navigation.getParam('phoneNumber', '');

    const user = {
      phoneNumber,
      pinNumber,
    };
    this.props.dispatch(login(user, this.props.navigation));
  };

  buttonLogin = () => {
    this.loginId();

    // this.props.navigation.navigate('Login');
    // console.log(this.state.fullname);
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
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 15,
              color: '#53338C',
            }}>
            Buat Security Code Anda
          </Text>
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
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad
              secureTextEntry={true}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              // onCodeChanged={pinNumber => {
              //   this.setState(pinNumber);
              // }}
              onCodeFilled={pinNumber => {
                // this.setState(pinNumber);
                console.log('type', typeof pinNumber);
                console.log(pinNumber);
                console.log(`Code is ${pinNumber}, you are good to go!`);
                this.setState({pinNumber});
              }}

              // placeholderCharacter={'*'}
              // placeholderTextColor={'red'}
              // selectionColor={"#03DAC6"}
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
    backgroundColor: '#53338C',
    paddingBottom: '10%',

    alignContent: 'center',
  },
  topNavbar: {
    // backgroundColor: 'magenta',
    flexDirection: 'row',
    top: '5%',
  },
  textTitle: {
    // backgroundColor: 'aqua',
    paddingBottom: '2%',
    marginTop: '10%',
  },
  textDetail: {
    // backgroundColor: 'yellow'
  },
  form: {
    // backgroundColor: 'pink'
  },
  containerTextInput: {
    // borderWidth: 1,
    // borderRadius: 8,
    // borderColor: '#a6ceec',
    // // padding: hp(Platform.OS === 'ios' ? 4 : 6),
    // width: 80,
    // height: 80,
    // alignItems: 'center',
    // justifyContent: 'center',

    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '20%',
  },
  containerButtonSubmit: {
    marginTop: '10%',

    // paddingBottom: '10%',
  },
  buttonSubmit: {
    marginHorizontal: '10%',
    // borderColor: '#b9b9b9',
    borderRadius: 30,
    padding: '5%',
    backgroundColor: '#11AFB8',
  },
  // Inputan : {
  //     // borderWidth: 1,
  //     // padding: hp(Platform.OS === 'ios' ? 6 : 7),
  //     height: screenHeight / 8,
  //     position: 'absolute',
  //     width: '100%',
  //     fontSize: 14,
  //     zIndex: 9999,
  //     opacity: 0,
  // },
  // inputInputan: {
  //     borderBottomWidth: 3,
  //     borderRadius: 10,
  //     borderColor: 'black',

  //     // padding: hp(Platform.OS === 'ios' ? 4 : 6),
  //     width: 50,
  //     height: 50,
  //     alignItems: 'center',
  //     justifyContent: 'center'
  // },
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
