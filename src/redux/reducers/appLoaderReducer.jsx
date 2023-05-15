import * as actionTypes from "../actions/actionTypes";

const initialState = {
  appLoading: false,
  loading: false,
};

const appLoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APP_LOADING:
      return {
        ...state,
        appLoading: action.loading,
      };
    case actionTypes.LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
export default appLoaderReducer;
