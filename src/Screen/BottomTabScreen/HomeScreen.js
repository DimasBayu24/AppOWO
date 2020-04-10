import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
// import promo from '../../Assets/Image/promo.PNG';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.textOWO}>OWO</Text>
          <Icon name="bell" size={25} style={style.bell} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={style.scrollStyle}>
          <Text style={{marginTop: '3%'}}>OWO Cash</Text>
          <View style={{flexDirection: 'row', marginTop: '3%'}}>
            <Text>Rp</Text>
            <Text style={{fontSize: 30}}>00000</Text>
          </View>
          <Text style={{marginTop: '3%'}}>
            OVO Points <Text style={{color: 'orange'}}>483</Text>
          </Text>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              height: 100,
              alignSelf: 'center',
              justifyContent: 'center',
              borderRadius: 5,
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
                style={{marginLeft: '5%', alignItems: 'center'}}>
                <Icon name="refresh" size={25} />
                <Text>Top Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <IconM name="bank-transfer" size={30} />
                <Text>Trnsfer</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginRight: '5%', alignItems: 'center'}}>
                <Icon name="history" size={25} />
                <Text>History</Text>
              </TouchableOpacity>
            </View>
          </View>
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
              <IconF name="cloud-lightning" size={25} />
              <Text>PLN</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconS name="screen-smartphone" size={25} />
              <Text>Pulsa</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconS name="globe" size={25} />
              <Text>Paket Data</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconF name="smartphone" size={25} />
              <Text>Pasca Bayar</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconM name="shield-plus" size={25} />
              <Text>BPJS</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon5 name="tv" size={25} />
              <Text>TV Kabel</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="tv" size={25} />
              <Text>Streaming</Text>
            </View>
            <View
              style={{
                width: '25%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconM name="clover" size={25} />
              <Text>Lainnya</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              elevation: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Info dan Promo Spesial
              </Text>
              <Text style={{fontSize: 15, color: '#11AFB8'}}>Lihat Semua</Text>
            </View>
            <ScrollView horizontal={true}>
              <View
                style={{
                  width: 300,
                  height: 100,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  marginLeft: 20,
                  elevation: 2,
                }}>
                <Text>Promo</Text>
                {/* <Image source={require('../../Assets/Image/promo.png')} /> */}
              </View>
              <View
                style={{
                  width: 300,
                  height: 100,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  marginLeft: 20,
                  elevation: 2,
                }}>
                <Text>Promo</Text>
              </View>
              <View
                style={{
                  width: 300,
                  height: 100,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  marginLeft: 20,
                  elevation: 2,
                }}>
                <Text>Promo</Text>
              </View>
              <View
                style={{
                  width: 300,
                  height: 100,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  marginLeft: 20,
                  elevation: 2,
                }}>
                <Text>Promo</Text>
              </View>
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
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: '5%'}}>
              Yang Menarik di OWO
            </Text>
            <Text style={{opacity: 0.5, marginTop: '2%'}}>
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
              <Text>Pusat Bantuan</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#53338C',
    height: '9%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollStyle: {
    flex: 1,
    marginHorizontal: '3%',
  },
  textOWO: {
    color: 'white',
    marginLeft: '5%',
    fontSize: 20,
  },
  bell: {
    marginRight: '5%',
    color: 'white',
  },
});
