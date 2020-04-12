const initialValue = {
  editProfileData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const editProfileReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'PATCH_PROFILE_PICTURE_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'PATCH_PROFILE_PICTURE_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'PATCH_PROFILE_PICTURE_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        editProfileData: action.payload.data,
      };
    case 'PATCH_PROFILE_DATA_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'PATCH_PROFILE_DATA_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'PATCH_PROFILE_DATA_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        editProfileData: action.payload.data,
      };
    default:
      return state;
  }
};

export default editProfileReducers;
