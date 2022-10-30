import axios from 'axios';
import { store } from '../store';

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_HOST}`,
});

axiosInstance.interceptors.request.use((config) => {
    const state = store.getState();
    const token = state.auth.user.token;
    config.params = config.params || {};
    config.params['auth'] = token;
    return config;
});

export default axiosInstance;
