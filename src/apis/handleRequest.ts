import { AxiosError, AxiosRequestConfig } from 'axios';

import { TOKEN_KEY } from './../constants/auth';
import { getLocalStorage } from './../utils/storage';

const authenticatedConfig = (config: AxiosRequestConfig, token: string) => {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  } as AxiosRequestConfig;
};

export const handleRequest = async (config: AxiosRequestConfig) => {
  const acToken = getLocalStorage(TOKEN_KEY);
  if (acToken) {
    return authenticatedConfig(config, acToken);
  }
  return config;
};

export const requestError = (error: AxiosError) => {
  return Promise.reject(error);
};
