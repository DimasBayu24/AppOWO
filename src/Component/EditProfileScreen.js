import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class EditProfileScreen extends Component {
  handleBack = () => {
    this.props.navigation.navigate('Profile');
  };
  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <TouchableOpacity onPress={this.handleBack}>
            <Icon name="arrow-left" size={25} style={style.arrowLeft} />
          </TouchableOpacity>
          <Text style={style.textHeader}>EDIT PROFIL</Text>
        </View>
        <View style={style.editContainer}>
          <View style={style.flexContainer}>
            <View style={style.profileImage} />
            <Text style={style.textProfileImage}>Perbarui Foto Profil</Text>
          </View>
          <Text style={style.textDescription}>Nama Lengkap</Text>
          <TextInput
            placeholder="ARIEF SETIAWAN"
            placeholderTextColor="black"
            style={style.textInput}
          />
          <Text style={style.textDescription}>Nomor Ponsel</Text>
          <View style={style.flexInput}>
            <Text style={style.inputEdit}>081219283746</Text>
            <Text style={style.changeButton}>Ubah</Text>
          </View>
          <Text style={style.textDescription}>Email</Text>
          <View style={style.flexInput}>
            <Text style={style.inputEdit}>aremoarief@gmail.com</Text>
            <Text style={style.changeButton}>Ubah</Text>
          </View>

          <TouchableOpacity style={style.submitInput}>
            <Text style={style.textSubmit}>SIMPAN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#53338C',
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: '9%',
  },
  textHeader: {
    fontSize: 20,
    paddingLeft: '8%',
    color: 'white',
  },
  arrowLeft: {
    color: 'white',
    paddingHorizontal: '4%',
  },
  editContainer: {
    flex: 1,
    marginHorizontal: '10%',
    marginVertical: '10%',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'grey',
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textProfileImage: {
    marginLeft: '5%',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#11AFB8',
  },
  textInput: {
    borderBottomWidth: 1,
    fontSize: 17,
    borderBottomColor: '#11AFB8',
  },
  textDescription: {
    marginTop: '5%',
    opacity: 0.5,
    fontSize: 15,
  },
  flexInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputEdit: {
    fontSize: 18,
  },

  changeButton: {
    color: '#11AFB8',
  },
  submitInput: {
    marginTop: '70%',
    width: '100%',
    height: 50,
    backgroundColor: '#8FD6D7',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  textSubmit: {
    color: 'white',
    fontSize: 20,
  },
});
