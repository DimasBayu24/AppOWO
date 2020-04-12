import Axios from 'axios';

const URL_STRING = 'http://192.168.6.141:3003/api/v1';

export const getHistory = id => {
  return {
    type: 'HISTORY',
    payload: Axios.get(`${URL_STRING}/history/${id}`),
  };
};

export const getDetailHistory = historyId => {
  return {
    type: 'HISTORY_DETAIL',
    payload: Axios.get(`${URL_STRING}/history/detail/${historyId}`),
  };
};

export const getUserDataById = id => {
  return {
    type: 'GET_USER_BY_ID',
    payload: Axios.get(`${URL_STRING}/users/${id}`),
  };
};
