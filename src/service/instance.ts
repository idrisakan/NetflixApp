import axios from 'axios';
import {BASE_URL} from './urls';
import {API_KEY, TOKEN} from '../utils/constans';
const Client = axios.create();
Client.defaults.baseURL = BASE_URL;
Client.defaults.params = {
  api_key: API_KEY,
  language: 'tr-TR',
};

Client.defaults.headers = {
  accept: 'application/json',
  Authorization: `Bearer ${TOKEN}`,
};

Client.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default Client;
