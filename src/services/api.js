import axios from 'axios';
import apiSource from './ApiSource';

const api = axios.create({
  baseURL: apiSource.api
});

export default api;

