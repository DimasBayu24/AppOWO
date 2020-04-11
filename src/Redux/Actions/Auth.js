import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const URL_STRING = 'http://192.168.6.141:3003/api/v1';

export const register = data => {
  return {
    type: 'REGISTER',
    payload: Axios.post(`${URL_STRING}/register`, data),
  };
};

export const login = (data, props) => {
  return {
    type: 'LOGIN',
    payload: Axios.post(`${URL_STRING}/login`, data)
      .then(result => {
        if (result.status === 200) {
          alert('Success');
          try {
            AsyncStorage.setItem(
              'TOKEN',
              JSON.stringify(result.data.result.token),
            );
            AsyncStorage.setItem(
              'userID',
              JSON.stringify(result.data.result.userID),
            );
            AsyncStorage.setItem('isLoggedIn', '1');
            const token = result.data.result.token;
            // alert('userID', id);
            console.log('tes token ', token);
            props.navigate('Home');
          } catch (error) {
            alert('Something went wrong!');
          }
        }
      })
      .catch(error => {
        console.log(error);
        alert('PIN is wrong');
      }),
  };
};

export const getPhone = data => {
  return {
    type: 'GET_NUMBER',
    payload: Axios.get(`${URL_STRING}/check-phone-number?phoneNumber=${data}`),
  };
};
