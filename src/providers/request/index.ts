import axios from 'axios';

export const Request = axios.create({
  // baseURL: 'https://65085b2756db83a34d9c3180.mockapi.io/api/v1',
  baseURL: 'http://localhost:3000/api/v1',
});
