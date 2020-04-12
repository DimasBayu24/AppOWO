import Axios from 'axios';

const URL_STRING = 'http://192.168.6.141:3003/api/v1';

export const patchTopUp = (id, balance) => {
  return {
    type: 'PATCH_TOPUP',
    payload: Axios.patch(`${URL_STRING}/transactions/top-up/${id}`, balance),
  };
};
