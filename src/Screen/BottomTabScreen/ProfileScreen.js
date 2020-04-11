import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/EvilIcons';

export default class ProfileScreen extends Component {
  handleEditProfile = () => {
    this.props.navigation.navigate('EditProfile');
  };
  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.textHeader}>Profile</Text>
          <Icon name="bell" size={25} style={style.bell} />
        </View>
        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={{flex: 1, height: '100%'}}>
          <View style={style.userInfo}>
            <Icons name="user" size={65} style={style.user} />
            <View>
              <Text style={{fontSize: 18}}>JOHN DOE</Text>
              <Text style={{fontSize: 18}}>0812-xxxx-xxxx</Text>
            </View>
          </View>
          <View style={style.detailOWOPremier}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="circle" size={20} style={{paddingLeft: '3%'}} />
              <Text style={style.textOWOPremier}>OWO Premier</Text>
            </View>
            <TouchableOpacity>
              <Text style={style.seeDetail}>
                Lihat Detail <Icon name="chevron-right" size={10} />{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.OwoId}>
            <Text
              style={{
                fontSize: 18,
                padding: '2%',
                marginLeft: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              OWO ID
            </Text>
            <View style={style.boxQRBar}>
              <View style={style.boxCodeQR}>
                <Icon name="qrcode" size={60} />
                <Text style={{marginLeft: 5, fontSize: 20, fontWeight: 'bold'}}>
                  QR Code
                </Text>
              </View>
              <View style={style.boxCodeBar}>
                <Icon name="barcode" size={60} />
                <Text style={{marginLeft: 5, fontSize: 20, fontWeight: 'bold'}}>
                  Barcode
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={style.textAkun}>Akun</Text>
            <TouchableOpacity
              onPress={this.handleEditProfile}
              style={style.accountEdit}>
              <View style={style.flexIconText}>
                <Icon5 name="user-edit" size={25} color={'#4D2A86'} />
                <Text
                  style={{marginLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                  Ubah Profil
                </Text>
              </View>
              <Icon name="chevron-right" size={15} style={style.chevron} />
            </TouchableOpacity>
            <View style={style.accountEdit}>
              <View style={style.flexIconText}>
                <Icon5 name="credit-card" size={28} color={'#4D2A86'} />
                <Text
                  style={{marginLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                  My Cards
                </Text>
              </View>
              <Icon name="chevron-right" size={15} style={style.chevron} />
            </View>
            <View style={style.accountEdit}>
              <View style={style.flexIconText}>
                <IconM name="ticket-percent" size={30} color={'#4D2A86'} />
                <Text
                  style={{marginLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                  Kode Promo
                </Text>
              </View>
              <Icon name="chevron-right" size={15} style={style.chevron} />
            </View>
          </View>
          <View>
            <Text style={style.textAkun}>Keamanan</Text>
            <View style={style.accountEdit}>
              <View style={style.flexIconText}>
                <Icon5 name="lock" size={25} color={'#4D2A86'} />
                <Text
                  style={{marginLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                  Ubah Security Code
                </Text>
              </View>
              <Icon name="chevron-right" size={15} style={style.chevron} />
            </View>
          </View>
          <View>
            <Text style={style.textAkun}>Tentang</Text>
            <View style={style.accountEdit}>
              <View style={style.flexIconText}>
                <Icon5 name="medal" size={25} color={'#4D2A86'} />
                <Text
                  style={{marginLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                  Keuntungan Pakai OWO
                </Text>
              </View>
              <Icon name="chevron-right" size={15} style={style.chevron} />
            </View>
            <View style={style.accountEdit}>
              <View style={style.flexIconText}>
                <Icon5 name="lightbulb" size={30} color={'#4D2A86'} />
                <Text
                  style={{marginLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                  Panduan OWO
                </Text>
              </View>
              <Icon name="chevron-right" size={15} style={style.chevron} />
            </View>
            <View style={style.accountEdit}>
              <View style={style.flexIconText}>
                <Icon5 name="wpforms" size={30} color={'#4D2A86'} />
                <Text
                  style={{marginLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                  Syarat dan Ketentuan
                </Text>
              </View>
              <Icon name="chevron-right" size={15} style={style.chevron} />
            </View>
            <View style={style.accountEdit}>
              <View style={style.flexIconText}>
                <IconM name="shield-plus" size={30} color={'#4D2A86'} />
                <Text
                  style={{marginLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                  Kebijakan Privasi
                </Text>
              </View>
              <Icon name="chevron-right" size={15} style={style.chevron} />
            </View>
            <View style={style.accountEdit}>
              <View style={style.flexIconText}>
                <IconA name="questioncircle" size={30} color={'#4D2A86'} />
                <Text
                  style={{marginLeft: '5%', fontSize: 15, fontWeight: 'bold'}}>
                  Pusat Bantuan
                </Text>
              </View>
              <Icon name="chevron-right" size={15} style={style.chevron} />
            </View>
          </View>
          <View style={style.version}>
            <Text style={{opacity: 0.5, marginLeft: '3%'}}>
              {'Version 3.8.1 (264)'}
            </Text>
            <Text style={style.pakeOWOaja}>#pakeOWOaja</Text>
          </View>
          <TouchableOpacity style={style.signOutContainer}>
            <Text style={style.signOut}>Sign Out</Text>
          </TouchableOpacity>
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
    backgroundColor: 'white',
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '11%',
  },
  textHeader: {
    fontSize: 20,
    paddingLeft: '4%',
    paddingTop: 15,
  },
  bell: {
    color: '#4D2A86',
    paddingRight: '4%',
    paddingTop: 15,
  },
  userInfo: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    marginTop: 20,
    marginHorizontal: '5%',
  },
  user: {},
  detailOWOPremier: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 1,
    marginHorizontal: '5%',
    height: 50,
    marginTop: '5%',
    borderRadius: 10,
  },
  textOWOPremier: {
    marginLeft: '5%',
    fontWeight: 'bold',
    fontSize: 17,
  },
  seeDetail: {
    fontSize: 16,
    opacity: 0.6,
  },
  OwoId: {
    marginTop: '5%',
    width: '100%',
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 10,
    height: 150,
  },
  boxCodeQR: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    backgroundColor: 'white',
    width: '46%',
    height: '100%',
    marginLeft: '3%',
    borderRadius: 10,
    elevation: 2,
  },
  boxCodeBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    backgroundColor: 'white',
    width: '46%',
    height: '100%',
    marginRight: '3%',
    borderRadius: 10,
    elevation: 2,
  },
  accountEdit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: '1%',
    borderBottomWidth: 0.5,
    paddingVertical: '4%',
  },
  flexIconText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '3%',
  },
  textAkun: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: '5%',
    marginLeft: '4%',
  },
  chevron: {
    marginRight: '5%',
  },
  version: {
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signOut: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  signOutContainer: {
    width: '85%',
    height: 50,
    backgroundColor: '#4D2A86',
    marginHorizontal: '5%',
    marginVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  pakeOWOaja: {
    opacity: 0.6,
    fontWeight: 'bold',
    marginRight: '4%',
    fontSize: 15,
  },
  boxQRBar: {
    flexDirection: 'row',
    paddingTop: '5%',
    justifyContent: 'space-between',
  },
});