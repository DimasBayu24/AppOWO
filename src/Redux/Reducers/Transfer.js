const initialValue = {
  postTransferData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const transferReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'POST_TRANSFER_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'POST_TRANSFER_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'POST_TRANSFER_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        postTransferData: action.payload.data,
      };
    case 'GET_USER_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_USER_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'GET_USER_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        postTransferData: action.payload.data,
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
        postTransferData: action.payload.data,
      };
    default:
      return state;
  }
};
export default transferReducers;
