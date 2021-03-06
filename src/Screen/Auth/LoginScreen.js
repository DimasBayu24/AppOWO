import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPhone} from '../../Redux/Actions/Auth';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../../assets/Logo.png';

const mapStateToProps = auth => {
  return {
    auth,
  };
};

class LoginScreen extends Component {
  state = {
    phoneNumber: '',
  };

  componentDidMount = async () => {
    await this.handleCheckPhoneNumber();
  };

  HandleSignUp = () => {
    this.props.navigation.push('Register');
  };

  handleCheckPhoneNumber = async () => {
    const {phoneNumber} = await this.state;
    await this.props.dispatch(getPhone(phoneNumber));
    await console.log('Phone Number ', this.props.auth.auth.authData);
  };

  handleLogin = () => {
    this.handleCheckPhoneNumber()
      .then(() => {
        this.props.navigation.navigate('PinLogin', {
          phoneNumber: this.state.phoneNumber,
        });
      })
      .catch(error => {
        alert('Phone number is not registered');
      });
  };

  render() {
    return (
      <View style={styles.loginContainer}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#4D2A86"
          translucent={true}
        />
        <View style={styles.imageLogoContainer}>
          <Image source={Logo} style={styles.mainLogo} />
        </View>
        <View style={styles.loginFormContainer}>
          <View style={styles.phoneNumberContainer}>
            <Icon
              name="user-circle"
              size={40}
              color={'white'}
              style={styles.userIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Nomor Ponsel"
              placeholderTextColor="white"
              keyboardType="numeric"
              maxLength={14}
              onChangeText={value => {
                this.setState({phoneNumber: value});
              }}
            />
          </View>
          <View style={styles.signInButtonContainer}>
            <TouchableOpacity
              onPress={this.handleLogin}
              style={styles.signInButton}>
              <Text style={styles.signInText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.firstLineContainer}>
            <View style={styles.leftLiner} />
            <Text style={styles.textLine}>ATAU</Text>
            <View style={styles.rightLiner} />
          </View>
          <View style={styles.joinNowButtonContainer}>
            <TouchableOpacity
              style={styles.joinNowButton}
              onPress={this.HandleSignUp}>
              <Text style={styles.JoinNowText}>JOIN NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Icon
            name="comment"
            size={25}
            color={'#11AFB8'}
            style={styles.iconText}
          />
          <TouchableOpacity>
            <Text style={styles.textFooter}>Butuh bantuan?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#4d2a86',
    padding: '8%',
  },
  imageLogoContainer: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '12%',
  },
  mainLogo: {
    // resizeMode: 'cover',
    width: '90%',
    height: '80%',
    alignSelf: 'center',
  },
  loginFormContainer: {
    paddingTop: '20%',
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    paddingBottom: '9%',
  },
  userIcon: {
    height: '100%',
    width: '15%',
  },
  textInput: {
    padding: 0,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 2,
    color: 'white',
    width: '85%',
  },
  signInButtonContainer: {
    paddingTop: '5%',
    paddingBottom: '10%',
  },
  signInButton: {
    borderColor: '#b9b9b9',
    borderWidth: 1.5,
    borderRadius: 20,
    padding: '3%',
    backgroundColor: 'transparent',
  },
  signInText: {
    textAlign: 'center',
    color: '#b9b9b9',
  },
  firstLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '10%',
    justifyContent: 'space-between',
  },
  leftLiner: {
    borderWidth: 1,
    borderColor: '#fff',
    width: '40%',
  },
  textLine: {
    textAlign: 'center',
    color: '#fff',
  },
  rightLiner: {
    borderWidth: 1,
    borderColor: '#fff',
    width: '40%',
  },
  joinNowButtonContainer: {
    paddingBottom: '10%',
  },
  joinNowButton: {
    borderColor: '#b9b9b9',
    // borderWidth: 1.5,
    borderRadius: 20,
    padding: '3%',
    backgroundColor: '#11AFB8',
  },
  JoinNowText: {
    textAlign: 'center',
    color: '#fff',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '7%',
  },
  iconText: {
    height: '100%',
    width: '10%',
  },
  textFooter: {
    paddingLeft: '1%',
    color: '#11AFB8',
  },
});
