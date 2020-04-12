import Axios from 'axios';

const URL_STRING = 'http://192.168.6.141:3003/api/v1';

export const patchProfilePicture = (id, data) => {
  return {
    type: 'PATCH_PROFILE_PICTURE',
    payload: Axios.patch(
      `${URL_STRING}/users/image-profile-account/${id}`,
      data,
    ),
  };
};

export const patchProfileData = (id, data) => {
  return {
    type: 'PATCH_PROFILE_DATA',
    payload: Axios.patch(`${URL_STRING}/users/edit-account/${id}`, data),
  };
};
