import axios from 'axios';
// import process from 'process';

// const API_BASE_URL=process.env.REACT_APP_API_BASE_URL;

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default axiosClient;
