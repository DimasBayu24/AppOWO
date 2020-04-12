import Axios from 'axios';

const URL_STRING = 'http://192.168.6.141:3003/api/v1';

export const postTransfer = transferData => {
  return {
    type: 'POST_TRANSFER',
    payload: Axios.post(`${URL_STRING}/transactions/`, transferData),
  };
};

export const getUser = id => {
  return {
    type: 'GET_USER',
    payload: Axios.get(`${URL_STRING}/users/${id}`),
  };
};

export const getPhone = data => {
  return {
    type: 'GET_NUMBER',
    payload: Axios.get(`${URL_STRING}/check-phone-number?phoneNumber=${data}`),
  };
};
