import axios from 'axios';
import {store} from '../store';

const client = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_HOST}`
});

client.interceptors.request.use((config) => {
    const state = store.getState();
    config.headers['Authorization'] = `Token ${state.auth.user.token}`;
    config.headers['Content-Type'] = 'application/json';

    return config;
});

export default client;
