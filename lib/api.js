import axios from 'axios';

const api = axios.create({
  baseURL: 'http://SEU_BACKEND:3000',
});

export const setAuthToken = (token) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default api;
