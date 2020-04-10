import Axios from 'axios';

const URL_STRING = 'http://192.168.6.141:3003/api/v1';

export const register = data => {
  return {
    type: 'REGISTER',
    payload: Axios.post(`${URL_STRING}/register`, data),
  };
};

export const login = data => {
  return {
    type: 'LOGIN',
    payload: Axios.post(`${URL_STRING}/login`, data),
  };
};
