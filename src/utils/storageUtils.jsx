import AsyncStorage from '@react-native-async-storage/async-storage';

/* USER TOKEN  */
export const setUserToken = token => {
  AsyncStorage.setItem('@authToken', `${token.toString()}`);
};
export const getUserToken = () => AsyncStorage.getItem('@authToken');
export const unsetUserToken = () => {
  AsyncStorage.removeItem('@authToken');
};

/* USER AUTH SUCCESS  */
export const setUserSuccess = object => {
  AsyncStorage.setItem('@authSuccess', `${JSON.stringify(object)}`);
};
export const getUserSuccess = () => AsyncStorage.getItem('@authSuccess');
export const unsetUserSuccess = () => {
  AsyncStorage.removeItem('@authSuccess');
};

/* THEME */
export const setTheme = theme => {
  AsyncStorage.setItem('@theme', theme);
};
export const getTheme = () => AsyncStorage.getItem('@theme');

export const clearStorage = () => {
  AsyncStorage.clear();
};
