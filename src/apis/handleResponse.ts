import { AxiosError, AxiosResponse } from 'axios';

export const handleResponse = (response: AxiosResponse) => {
  return response.data;
};

export const responseError = (error: AxiosError) => {
  return Promise.reject(error);
};
