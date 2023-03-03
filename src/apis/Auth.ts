import { API_URLS } from './../constants/apiUrls';
import { REFRESH_KEY, TOKEN_KEY } from './../constants/auth';
import { LoginResponse } from './../interfaces/auth';
import { setLocalStorage } from './../utils/storage';
import http from './instance';

export const kakaoLogin = async (code: string) => {
  try {
    const { accessToken, refreshToken }: LoginResponse = await http.post(
      API_URLS.USER.KAKAO_LOGIN,
      {
        code,
      }
    );
    setLocalStorage(TOKEN_KEY, accessToken);
    setLocalStorage(REFRESH_KEY, refreshToken);
  } catch (error) {
    console.error(error);
  }
};

export const naverLogin = async (code: string, state: string) => {
  try {
    const { accessToken, refreshToken }: LoginResponse = await http.post(
      API_URLS.USER.NAVER_LOGIN,
      {
        code,
        state,
      }
    );
    setLocalStorage(TOKEN_KEY, accessToken);
    setLocalStorage(REFRESH_KEY, refreshToken);
  } catch (error) {
    console.error(error);
  }
};
