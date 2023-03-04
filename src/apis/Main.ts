import { API_URLS } from '../constants/apiUrls';
import { FlyerCountResponse } from '../interfaces/main';
import http from './instance';

export const flyerCount = async () => {
  try {
    const {
      data: { allCount },
    }: FlyerCountResponse = await http.get(API_URLS.MAIN.COUNT);
    return allCount;
  } catch (error) {
    console.error(error);
  }
};
