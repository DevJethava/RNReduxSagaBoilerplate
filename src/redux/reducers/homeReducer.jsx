import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: {},
  photo: '',
  theme: 'dark',
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HOME_GET_DASHBORD_DATA:
      return state;
    case actionTypes.SET_DARK_THEME:
      return {
        ...state,
        theme: 'dark',
      };
    case actionTypes.SET_LIGHT_THEME:
      return {
        ...state,
        theme: 'light',
      };
    default:
      return state;
  }
};
export default homeReducer;
