import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.31.3.155:3333'
});

export default api;    