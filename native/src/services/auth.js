import { AsyncStorage } from 'react-native';

export const TOKEN_USER = '@delivery-user';

export const isAuthenticated = async () => (await AsyncStorage.getItem(TOKEN_USER)) !== null;

export const getUser = async () => JSON.parse(await AsyncStorage.getItem(TOKEN_USER));

export const getToken = () => getUser();

export const login = async (user) => {
  await AsyncStorage.setItem(TOKEN_USER, JSON.stringify(user));
};

export const logout = async () => {
  await AsyncStorage.removeItem(TOKEN_USER);
};
