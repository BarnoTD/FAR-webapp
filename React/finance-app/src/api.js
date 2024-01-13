import axios from 'axios';

const api = axios.create({
    baseURL: 'https://finance-app-api.vercel.app',
});

export default api;