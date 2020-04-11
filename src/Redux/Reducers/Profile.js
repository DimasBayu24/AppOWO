const initialValue = {
  profileData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const profileReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_PROFILE_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_PROFILE_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'GET_PROFILE_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        profileData: action.payload.data,
      };
    default:
      return state;
  }
};
export default profileReducers;
