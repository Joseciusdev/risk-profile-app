// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080/api';

// const api = axios.create({
//   baseURL: API_BASE_URL,
// });

// export const fetchQuestions = async () => {
//   try {
//     const response = await api.get('/questionnaire');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching questions:', error);
//     throw error;
//   }
// };

// export const submitQuestionnaire = async (answers: { [key: string]: string | number }) => {
//   try {
//     const response = await api.post('/questionnaire', answers);
//     return response.data;
//   } catch (error) {
//     console.error('Error submitting questionnaire:', error);
//     throw error;
//   }
// };

import axios from 'axios';
// import { API_URL } from '@env';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
