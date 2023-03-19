import { API_URLS } from './../constants/apiUrls';
import { REFRESH_KEY, TOKEN_KEY } from './../constants/auth';
import { LoginResponse } from './../interfaces/auth';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from './../utils/storage';
import http from './instance';

interface KakaoLoginProps {
  code: string;
}
interface NaverLoginProps {
  code: string;
  state?: string;
}

export const naverLogin = async (data: NaverLoginProps) => {
  try {
    const { accessToken, refreshToken }: LoginResponse = await http.post(
      API_URLS.USER.NAVER_LOGIN,
      data
    );
    setLocalStorage(TOKEN_KEY, accessToken);
    setLocalStorage(REFRESH_KEY, refreshToken);
  } catch (error) {
    console.error(error);
    return {
      isLoginFailed: true,
    };
  }
  return {
    isLoginFailed: false,
  };
};

export const kakaoLogin = async (data: KakaoLoginProps) => {
  try {
    const { accessToken, refreshToken }: LoginResponse = await http.post(
      API_URLS.USER.KAKAO_LOGIN,
      data
    );
    setLocalStorage(TOKEN_KEY, accessToken);
    setLocalStorage(REFRESH_KEY, refreshToken);
  } catch (error) {
    console.error(error);
    return {
      isLoginFailed: true,
    };
  }
  return {
    isLoginFailed: false,
  };
};

export const logout = async () => {
  try {
    await http.post(API_URLS.USER.LOGOUT);
    removeLocalStorage(TOKEN_KEY);
    removeLocalStorage(REFRESH_KEY);
  } catch (error) {
    console.error(error);
  }
};

export const refresh = async () => {
  const token = getLocalStorage(REFRESH_KEY);
  try {
    const { accessToken, refreshToken }: LoginResponse = await http.post(
      API_URLS.AUTH.REFRESH,
      {
        refreshToken: token,
      }
    );
    setLocalStorage(TOKEN_KEY, accessToken);
    setLocalStorage(REFRESH_KEY, refreshToken);
    return accessToken;
  } catch (error) {
    console.error(error);
  }
};
