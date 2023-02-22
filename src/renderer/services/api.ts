import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.jikan.moe/v4/',
  timeout: 1500,
});
export default api;
