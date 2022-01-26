import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../assets/logo-box.png';
import {connect} from 'react-redux';
import {getUser, postTransfer, getPhone} from '../Redux/Actions/Transfer';
import AsyncStorage from '@react-native-community/async-storage';

const mapStateToProps = (postTransfer) => {
  return {
    postTransfer,
  };
};

class TransferOwo extends Component {
  // phoneNo = this.props.navigation.getParam('phoneNumber', '');

  state = {
    userData: [],
    receiverData: [],
    transactionAmount: 0,
    receiverPhoneNumber: '',
    transactionMessage: '',
  };

  componentDidMount = async () => {
    await this.userSender();
  };

  userSender = async () => {
    await AsyncStorage.getItem('userID').then(
      async (userID) => {
        await console.log('id sender', userID); //Display key value
        await this.props.dispatch(getUser(userID));
        await this.setState({
          userData:
            this.props.postTransfer.postTransfer.postTransferData.result[0],
        });
        await console.log(
          'my balance ',
          this.props.postTransfer.postTransfer.postTransferData.result[0]
            .balance,
        );
      },
      (error) => {
        console.log(error); //Display error
      },
    );
  };

  handleCheckPhoneNumber = async () => {
    const {receiverPhoneNumber} = await this.state;
    await this.props.dispatch(getPhone(receiverPhoneNumber));
    await this.setState({
      receiverData:
        this.props.postTransfer.postTransfer.postTransferData.result[0],
    });
    await console.log(
      'Phone Number ',
      this.props.postTransfer.postTransfer.postTransferData,
    );
  };

  transferBalance = async () => {
    await AsyncStorage.getItem('userID').then(
      async (userID) => {
        const {transactionAmount, receiverPhoneNumber, transactionMessage} =
          this.state;
        const transferData = {
          senderID: userID,

          receiverID: this.state.receiverData.userID,
          senderPhoneNumber: this.state.userData.phoneNumber,
          receiverPhoneNumber: receiverPhoneNumber,
          transactionAmount: transactionAmount,
          transactionMessage: transactionMessage,
        };
        await console.log('id', userID); //Display key value
        await this.props.dispatch(postTransfer(transferData));
      },
      (error) => {
        console.log(error); //Display error
      },
    );
  };

  transferHandler = () => {
    this.handleCheckPhoneNumber()
      .then(() => {
        this.transferBalance()
          .then(() => {
            this.props.navigation.navigate('Home');
          })
          .catch((error) => {
            alert('Something went wrong');
          });
      })
      .catch((error) => {
        alert('Phone number is not registered');
      });
  };

  HandleBack = () => {
    this.props.navigation.navigate('Transfer');
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="#53338C"
            translucent={true}
          />
          <View style={styles.topNavbar}>
            <TouchableOpacity
              onPress={this.HandleBack}
              style={styles.containerTextNavbar}>
              <Icon
                name="arrow-left"
                color="white"
                size={25}
                style={styles.iconBack}
              />
              <Text style={styles.textNavbar}>KE SESAMA OWO</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerMain}>
            <View style={styles.containerTextInputUpper}>
              <TextInput
                placeholder="Masukan nama atau nomor ponsel"
                placeholderTextColor="#9A97A9"
                keyboardType="numeric"
                style={styles.textInputUpper}
                onChangeText={(value) => {
                  this.setState({receiverPhoneNumber: value});
                }}
              />
              <Icon
                name="address-book"
                color="#9A97A9"
                size={25}
                style={styles.iconTextUpper}
              />
            </View>
            <View style={styles.containerButtonBalance}>
              <View style={styles.containerTextHeaderButton}>
                <Text style={styles.textHeaderButton}>Sumber Dana</Text>
              </View>
              <TouchableOpacity style={styles.buttonBalance}>
                <Image style={styles.logo} source={Logo} />
                <View style={styles.containerTextButton}>
                  <Text style={styles.textOwoCash}>OWO CASH</Text>
                  <Text style={styles.textAmount}>
                    Saldo{' '}
                    <Text style={styles.textCash}>
                      Rp {this.state.userData.balance}
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.containerBoxAmount}>
              <View style={styles.boxAmount}>
                <Text style={styles.textHeaderBoxAmount}>Nominal Transfer</Text>
                <TextInput
                  placeholder="Rp0"
                  placeholderTextColor="black"
                  keyboardType="numeric"
                  style={styles.textInputAmount}
                  onChangeText={(value) => {
                    this.setState({transactionAmount: value});
                  }}
                />
              </View>
            </View>
            <View style={styles.containerTextMessage}>
              <TextInput
                placeholder="Pesan(opsional)"
                placeholderTextColor="#9A97A9"
                keyboardType="numeric"
                maxLength={25}
                style={styles.textInputUpper}
                onChangeText={(value) => {
                  this.setState({transactionMessage: value});
                }}
              />
            </View>

            <View style={styles.containerButtonSubmit}>
              <TouchableOpacity
                onPress={this.transferHandler}
                style={styles.buttonSubmit}>
                <Text style={styles.textSubmit}>Lanjutkan Saja</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps)(TransferOwo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavbar: {
    backgroundColor: '#53338C',
    paddingBottom: '12%',
    paddingTop: '6.5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textNavbar: {
    color: 'white',
    fontSize: 16,
    marginLeft: '15%',
  },
  containerTextNavbar: {
    top: '70%',
    flexDirection: 'row',
  },
  iconBack: {
    marginLeft: '8%',
  },
  containerMain: {
    padding: '10%',
    backgroundColor: 'white',
  },
  containerTextInputUpper: {
    flexDirection: 'row',
  },
  textInputUpper: {
    borderBottomColor: '#9A97A9',
    borderBottomWidth: 2,
    color: '#9A97A9',
    fontSize: 14,
    paddingBottom: '3%',
  },
  iconTextUpper: {
    marginLeft: '5%',
    top: '3%',
  },
  containerButtonBalance: {
    marginTop: '10%',
    paddingBottom: '10%',
  },
  containerTextHeaderButton: {
    marginBottom: '2%',
  },
  textHeaderButton: {
    color: '#9A97A9',
  },
  buttonBalance: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#9A97A9',
    flexDirection: 'row',
    padding: '5%',
  },
  logo: {
    width: '27%',
    height: '85%',
    borderRadius: 5,
  },
  containerTextButton: {
    marginLeft: '5%',
    top: '-1%',
  },
  textOwoCash: {
    fontWeight: 'bold',
  },
  textAmount: {
    color: '#9A97A9',
  },
  textCash: {
    color: 'black',
  },
  containerBoxAmount: {
    backgroundColor: '#D5D9DF',
    paddingBottom: '1%',
    borderRadius: 5,
  },
  boxAmount: {
    padding: '5%',
  },
  textHeaderBoxAmount: {
    color: '#9A97A9',
  },
  textInputAmount: {
    fontSize: 25,
  },
  containerTextMessage: {
    marginTop: '5%',
  },
  containerButtonSubmit: {
    marginTop: '20%',
  },
  buttonSubmit: {
    borderColor: '#b9b9b9',
    borderRadius: 25,
    padding: '5%',
    backgroundColor: '#8FD6D7',
  },
  textSubmit: {
    color: 'white',
    textAlign: 'center',
  },
});
