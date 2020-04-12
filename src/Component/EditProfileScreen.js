import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {
  patchProfilePicture,
  patchProfileData,
} from '../Redux/Actions/EditProfile';
import AsyncStorage from '@react-native-community/async-storage';

const mapStateToProps = editProfile => {
  return {
    editProfile,
  };
};

class EditProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: this.props.navigation.getParam('fullname', ''),
      phoneNumber: this.props.navigation.getParam('phoneNumber', ''),
      email: this.props.navigation.getParam('email', ''),
      profileImage: '',
    };
  }
  editAccount = async () => {
    await AsyncStorage.getItem('userID').then(
      async userID => {
        const fullname = this.state.fullname;
        const phoneNumber = this.state.phoneNumber;
        const email = this.state.email;
        const user = {
          fullname: fullname,
          phoneNumber: phoneNumber,
          email: email,
        };

        await this.props.dispatch(patchProfileData(userID, user));
      },
      error => {
        console.log(error); //Display error
      },
    );
  };

  editProfileDataHandler = () => {
    this.editAccount()
      .then(() => {
        this.props.navigation.navigate('Profile');
      })
      .catch(error => {
        alert('Something went wrong');
      });
  };

  editPicture = async () => {
    await AsyncStorage.getItem('userID').then(
      async userID => {
        const profileImage = this.state.profileImage;
        const user = {
          profileImage,
        };

        await this.props.dispatch(patchProfilePicture(userID, user));
      },
      error => {
        console.log(error); //Display error
      },
    );
  };

  componentDidMount = async () => {
    await this.editAccount();
    await this.editPicture();
  };

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
            <View style={style.profileImage}>
              <Image
                style={style.profileImage}
                source={{
                  uri: this.props.navigation.getParam('profileImage', ''),
                }}
              />
            </View>
            <Text style={style.textProfileImage}>Perbarui Foto Profil</Text>
          </View>
          <Text style={style.textDescription}>Nama Lengkap</Text>
          <TextInput
            value={this.state.fullname}
            onChangeText={value => this.setState({fullname: value})}
            placeholder="Masukan nama lengkap"
            placeholderTextColor="black"
            style={style.textInput}
          />
          <Text style={style.textDescription}>Nomor Ponsel</Text>
          <View style={style.flexInput}>
            <TextInput
              value={this.state.phoneNumber}
              onChangeText={value => this.setState({phoneNumber: value})}
              placeholder="Masukan Nomor ponsel"
              placeholderTextColor="black"
              style={style.textInput}
            />
            <Text style={style.changeButton}>Ubah</Text>
          </View>
          <Text style={style.textDescription}>Email</Text>
          <View style={style.flexInput}>
            <TextInput
              value={this.state.email}
              onChangeText={value => this.setState({email: value})}
              placeholder="Masukan Email"
              placeholderTextColor="black"
              style={style.textInput}
            />
            <Text style={style.changeButton}>Ubah</Text>
          </View>

          <TouchableOpacity
            onPress={this.editProfileDataHandler}
            style={style.submitInput}>
            <Text style={style.textSubmit}>SIMPAN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(EditProfileScreen);

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
