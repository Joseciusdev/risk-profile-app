import axios from 'axios';
// import { API_URL } from '@env';

const API_URL = 'https://d644-2409-40f4-143-7155-7e76-d6b3-78f3-7e00.ngrok-free.app/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
