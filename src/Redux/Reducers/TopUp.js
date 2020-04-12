const initialValue = {
  topUpData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const topUpReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'PATCH_TOPUP_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'PATCH_TOPUP_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'PATCH_TOP_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        topUpData: action.payload.data,
      };
    default:
      return state;
  }
};
export default topUpReducers;
