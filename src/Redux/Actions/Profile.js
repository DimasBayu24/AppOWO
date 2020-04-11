import Axios from 'axios';

const URL_STRING = 'http://192.168.6.141:3003/api/v1';

export const getProfile = id => {
  return {
    type: 'GET_PROFILE',
    payload: Axios.get(`${URL_STRING}/users/${id}`),
  };
};
