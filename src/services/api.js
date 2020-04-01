import axios from 'axios';

const api = axios.create({
  baseURL: 'https://students-match-backend.herokuapp.com/', 
});

export default api;

