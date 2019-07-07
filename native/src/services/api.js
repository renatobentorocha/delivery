/* eslint-disable no-param-reassign */
import axios from 'axios';
import { API_ADDRESS } from 'react-native-dotenv';
import { getToken } from './auth';

const api = axios.create({
  // baseURL: 'http://10.0.3.2:3000',
  baseURL: API_ADDRESS,
});

api.interceptors.request.use(async (config) => {
  config.headers.device = 'MOBILE';

  const user = await getToken();

  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});

export default api;
