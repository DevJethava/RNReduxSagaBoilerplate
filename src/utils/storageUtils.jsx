import AsyncStorage from '@react-native-async-storage/async-storage';

/* USER TOKEN  */
export const setUserToken = async (token) => {
  await AsyncStorage.setItem('@authToken', `${token.toString()}`);
};
export const getUserToken = async () => await AsyncStorage.getItem('@authToken');
export const unsetUserToken = async () => {
  await AsyncStorage.removeItem('@authToken');
};

/* USER AUTH SUCCESS  */
export const setUserSuccess = async (object) => {
  await AsyncStorage.setItem('@authSuccess', `${JSON.stringify(object)}`);
};
export const getUserSuccess = async () => await AsyncStorage.getItem('@authSuccess');
export const unsetUserSuccess = async () => {
  await AsyncStorage.removeItem('@authSuccess');
};

/* THEME */
export const setTheme = async (theme) => {
  await AsyncStorage.setItem('@theme', theme);
};
export const getTheme = async () => await AsyncStorage.getItem('@theme');

/* HISTORY */
export const setHistoryData = async (object) => {
  await AsyncStorage.setItem('@history', `${object}`);
};
export const getHistoryData = async () => await AsyncStorage.getItem('@history');

export const clearStorage = async () => {
  await AsyncStorage.clear();
};
