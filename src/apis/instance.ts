import axios, { AxiosInstance } from 'axios';

import { handleRequest, requestError } from './handleRequest';
import { handleResponse, responseError } from './handleResponse';

const API_BASE_URL = import.meta.env.VITE_API_URL + '/api';

const http: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

http.interceptors.request.use(handleRequest, requestError);
http.interceptors.response.use(handleResponse, responseError);

export default http;
