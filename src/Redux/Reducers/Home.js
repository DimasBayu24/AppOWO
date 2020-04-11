const initialValue = {
  homeData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const homeReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_BALANCE_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_BALANCE_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'GET_BALANCE_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        homeData: action.payload.data,
      };
    default:
      return state;
  }
};
export default homeReducers;
