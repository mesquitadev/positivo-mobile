import axios from 'axios';

const prod = 'http://localhost:3333/api/v1/';
const api = axios.create({
  baseURL: prod,
});

export default api;
