import { AxiosError, AxiosRequestConfig } from 'axios';

import { API_URLS } from '../constants/apiUrls';
import { ROUTES } from '../constants/routes';
import { isTokenExpired } from '../utils/tokenValidate';
import { REFRESH_KEY, TOKEN_KEY } from './../constants/auth';
import { getLocalStorage, removeLocalStorage } from './../utils/storage';
import { refresh } from './Auth';

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
  if (config.url?.includes(API_URLS.AUTH.REFRESH)) return config;
  if (acToken) {
    if (isTokenExpired(acToken)) {
      const newToken = await refresh();
      if (newToken) return authenticatedConfig(config, newToken);
      else {
        removeLocalStorage(TOKEN_KEY);
        removeLocalStorage(REFRESH_KEY);
        alert('로그인 시간이 만료되었습니다. 다시 로그인 해주세요 😭');
        location.pathname === ROUTES.HOME;
      }
    }
    return authenticatedConfig(config, acToken);
  }
  return config;
};

export const requestError = (error: AxiosError) => {
  return Promise.reject(error);
};
