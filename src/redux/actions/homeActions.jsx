import * as actionTypes from './actionTypes';

// Theme change actions
export const themeChangeLight = (resolve, reject) => ({
  type: actionTypes.THEME_CHANGE_LIGHT,
  resolve,
  reject,
});

export const themeChangeDark = (resolve, reject) => ({
  type: actionTypes.THEME_CHANGE_DARK,
  resolve,
  reject,
});

export const setDarkTheme = () => {
  return { type: actionTypes.SET_DARK_THEME };
};

export const setLightTheme = () => {
  return { type: actionTypes.SET_LIGHT_THEME };
};

// Home sctions
export const getDashbordData = (data, resolve, reject) => ({
  type: actionTypes.HOME_GET_DASHBORD_DATA,
  data,
  resolve,
  reject,
});
