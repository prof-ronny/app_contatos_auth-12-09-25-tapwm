import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-contatos-30-05-2025-1-qypf.onrender.com/api',
});

export const setAuthToken = (token) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default api;
