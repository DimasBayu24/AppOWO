const initialValue = {
  authData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const authReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'REGISTER_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'REGISTER_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        authData: action.payload.data,
      };
    case 'LOGIN_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        authData: action.payload.data,
      };
    case 'GET_NUMBER_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_NUMBER_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'GET_NUMBER_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        authData: action.payload.data,
      };
    default:
      return state;
  }
};
export default authReducers;
