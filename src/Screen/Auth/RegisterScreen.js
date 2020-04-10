import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class RegisterScreen extends Component {
  HandleSignUp = () => {
    this.props.navigation.navigate('App');
  };
  render() {
    return (
      <View>
        <View style={style.header}>
          <TouchableOpacity>
            <Icon style={style.backButton} name="arrow-left" />
          </TouchableOpacity>
          <Text style={style.headerText}>JOIN OWO</Text>
        </View>
        <ScrollView style={style.form}>
          <Text style={{fontSize: 16}}>
            Terima kasih telah bergabung! Kami {'akan\nmengirimkan'}
            <Text style={{fontWeight: 'bold'}}> kode</Text> melalui
            <Text style={{fontWeight: 'bold'}}> SMS</Text> dan
            <Text style={{fontWeight: 'bold'}}> email</Text>
            {'\nuntuk'} verifikasi proses registrasi{' '}
          </Text>
          <Text style={style.textForm}>Nama Lengkap</Text>
          <TextInput style={style.inputForm} />
          <Text style={style.textForm}>Nomor Ponsel</Text>
          <TextInput style={style.inputForm} />
          <Text style={style.textForm}>Email</Text>
          <TextInput style={style.inputForm} />
          <Text style={style.textForm}>
            {'Kode Promo/Referensi:(opsional)'}
          </Text>
          <TextInput style={style.inputForm} />
          <View style={style.agreementText}>
            <CheckBox value={false} disabled={false} />
            <Text style={{fontSize: 14}}>
              Saya setuju dengan
              <Text style={style.agreementTextPart}>
                {' Syarat & Ketentuan '}
              </Text>
              <Text>dan</Text>
              <Text style={style.agreementTextPart}> Kebijakan Privasi</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={style.nextButton}
            onPress={this.HandleSignUp}>
            <Text style={{color: 'white'}}>BERIKUTNYA</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#53338C',
    height: 60,
  },
  backButton: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 40,
  },
  form: {
    marginVertical: 40,
    marginHorizontal: 40,
  },
  inputForm: {
    borderBottomWidth: 2.5,
    opacity: 0.5,
    marginBottom: 5,
    height: 40,
  },
  textForm: {
    marginTop: 15,
    opacity: 0.5,
  },
  agreementText: {
    flexDirection: 'row',
    marginTop: 30,
  },
  agreementTextPart: {
    color: '#11AFB8',
    fontWeight: 'bold',
  },
  nextButton: {
    marginTop: 100,
    width: '100%',
    height: 55,
    backgroundColor: '#8FD6D7',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});
