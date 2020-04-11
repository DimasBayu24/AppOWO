import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {getBalance} from '../../Redux/Actions/Home';

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  // ImageBackGround,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const mapStateToProps = home => {
  return {
    home,
  };
};

class HomeScreen extends Component {
  state = {
    userData: [],
  };

  balance = async () => {
    await AsyncStorage.getItem('userID').then(
      async userID => {
        await console.log('id', userID); //Display key value
        await this.props.dispatch(getBalance(userID));
        await this.setState({
          userData: this.props.home.home.homeData.result[0].balance,
        });
        await console.log('balance ', this.props.home.home.homeData.result[0]);
      },
      error => {
        console.log(error); //Display error
      },
    );
  };

  componentDidMount = async () => {
    await this.balance();
  };

  render() {
    return (
      <View style={style.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#4D2A86"
          translucent={true}
        />
        <View style={style.header}>
          <Image
            style={style.textOWO}
            source={require('../../../assets/textOWO.png')}
          />
          <Icon name="bell" size={25} style={style.bell} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={style.scrollStyle}>
          {/* <ImageBackGround
            source={require('../../../assets/backgroundHome.png')}> */}
          <Text style={{marginTop: '3%', marginHorizontal: 10}}>OWO Cash</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '3%',
              marginHorizontal: 10,
            }}>
            <Text>Rp</Text>
            <Text style={{fontSize: 30}}>{this.state.userData}</Text>
          </View>
          <Text style={{marginTop: '3%', marginHorizontal: 10}}>
            OVO Points <Text style={{color: 'orange'}}>483</Text>
          </Text>
          <View
            style={{
              width: '88%',
              backgroundColor: 'white',
              height: 90,
              alignSelf: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginTop: '5%',
              elevation: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('TopUp')}
                style={{marginLeft: '10%', alignItems: 'center'}}>
                <Icon name="refresh" size={30} color={'#4D2A86'} />
                <Text>Top Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Transfer')}
                style={{alignItems: 'center'}}>
                <IconM name="bank-transfer" size={40} color={'#4D2A86'} />
                <Text>Transfer</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('History')}
                style={{marginRight: '10%', alignItems: 'center'}}>
                <Icon name="history" size={30} color={'#4D2A86'} />
                <Text>History</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* </ImageBackGround> */}
          <View
            style={{
              flex: 1,
              width: '100%',
              height: 260,
              backgroundColor: 'white',
              alignSelf: 'center',
              marginTop: '5%',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 2,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconF name="cloud-lightning" size={30} color={'orange'} />
              <Text>PLN</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconS name="screen-smartphone" size={30} />
              <Text>Pulsa</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconS name="globe" size={30} color={'blue'} />
              <Text>Paket Data</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconF name="smartphone" size={30} />
              <Text>Pasca Bayar</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconM name="shield-plus" size={30} color={'green'} />
              <Text>BPJS</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon5 name="tv" size={30} />
              <Text>TV Kabel</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="tv" size={30} />
              <Text>Streaming</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconM name="clover" size={30} color={'purple'} />
              <Text>Lainnya</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                }}>
                Info dan Promo Spesial
              </Text>
              <Text
                style={{fontSize: 15, color: '#11AFB8', marginHorizontal: 10}}>
                Lihat Semua
              </Text>
            </View>
            <ScrollView
              style={{width: '100%', marginTop: '4%'}}
              horizontal={true}>
              <Image
                style={{
                  width: 330,
                  height: 130,
                  borderRadius: 15,
                  marginLeft: 10,
                }}
                resizeMode="stretch"
                source={require('../../../assets/slider1.png')}
              />

              <Image
                style={{
                  width: 330,
                  height: 130,
                  borderRadius: 15,
                  marginLeft: 10,
                }}
                resizeMode="stretch"
                source={require('../../../assets/slider2.png')}
              />

              <Image
                style={{
                  width: 330,
                  height: 130,
                  borderRadius: 15,
                  marginLeft: 10,
                }}
                resizeMode="stretch"
                source={require('../../../assets/slider3.png')}
              />

              <Image
                style={{
                  width: 330,
                  height: 130,
                  borderRadius: 15,
                  marginLeft: 10,
                }}
                resizeMode="stretch"
                source={require('../../../assets/slider4.png')}
              />
            </ScrollView>
          </View>
          <View
            style={{
              width: '100%',
              height: 300,
              backgroundColor: 'white',
              marginTop: '5%',
              elevation: 1,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: '5%',
                marginHorizontal: 10,
              }}>
              Yang Menarik di OWO
            </Text>
            <Text style={{opacity: 0.5, marginTop: '2%', marginHorizontal: 10}}>
              Jangan ngaku update kalau belum cobain fitur ini
            </Text>
            <View
              style={{
                width: 150,
                height: 225,
                backgroundColor: 'white',
                borderRadius: 10,
                marginLeft: 10,
                elevation: 2,
                marginTop: '5%',
              }}>
              <Image
                style={{
                  width: 150,
                  height: 100,
                  borderTopLeftRadius: 10,
                  borderTopLeftRadius: 10,
                }}
                resizeMode="stretch"
                source={require('../../../assets/article1.png')}
              />
              <Text style={{fontWeight: 'bold', marginLeft: 5}}>
                Pusat Bantuan
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  opacity: 0.5,
                  marginTop: 10,
                  marginLeft: 5,
                }}>
                {
                  'Punya kendala atau \npertanyaan terkait OWO?\nKamu bisa kirim di sini'
                }
              </Text>
              <Text
                style={{color: '#8FD6D7', alignSelf: 'center', marginTop: 15}}>
                Lihat Bantuan
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps)(HomeScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#4D2A86',
    height: '11%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  scrollStyle: {
    flex: 1,
  },
  textOWO: {
    marginLeft: '5%',
    width: 75,
    height: 30,
  },
  bell: {
    marginRight: '5%',
    color: 'white',
  },
});
