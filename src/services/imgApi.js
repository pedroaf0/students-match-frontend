import axios from 'axios';
import apiSource from './ApiSource';

const api = axios.create({
  baseURL: apiSource.imgApi
});

export default api;

