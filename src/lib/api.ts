import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

axios.defaults.withCredentials = true;

export const api = {
  auth: {
    register: (data: { name: string; email: string; password: string }) =>
      axios.post(`${API_URL}/auth/register`, data),
    login: (data: { email: string; password: string }) =>
      axios.post(`${API_URL}/auth/login`, data),
    logout: () => axios.post(`${API_URL}/auth/logout`),
  },
  restaurants: {
    getAll: () => axios.get(`${API_URL}/restaurants`),
    getById: (id: string) => axios.get(`${API_URL}/restaurants/${id}`),
    create: (data: any) => axios.post(`${API_URL}/restaurants`, data),
    update: (id: string, data: any) => axios.put(`${API_URL}/restaurants/${id}`, data),
  },
  orders: {
    create: (orderData: any) => axios.post(`${API_URL}/orders`, orderData),
    getAll: () => axios.get(`${API_URL}/orders`),
  },
  payments: {
    createIntent: (amount: number) => axios.post(`${API_URL}/create-payment-intent`, { amount }),
  },
};