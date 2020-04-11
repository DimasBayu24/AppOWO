import Axios from 'axios';

const URL_STRING = 'http://192.168.6.141:3003/api/v1';

export const getBalance = id => {
  return {
    type: 'GET_BALANCE',
    payload: Axios.get(`${URL_STRING}/users/balance/${id}`),
  };
};
