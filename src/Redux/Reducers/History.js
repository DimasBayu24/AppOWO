const initialValue = {
  historyData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const historyReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'HISTORY_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'HISTORY_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'HISTORY_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        historyData: action.payload.data,
      };
    case 'HISTORY_DETAIL_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'HISTORY_DETAIL_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'HISTORY_DETAIL_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        historyData: action.payload.data,
      };
    case 'GET_USER_BY_ID_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_USER_BY_ID_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'GET_USER_BY_ID_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        historyData: action.payload.data,
      };

    default:
      return state;
  }
};
export default historyReducers;
