import { API_URLS } from '../constants/apiUrls';
import { FlyerCountResponse, FlyerListResponse } from '../interfaces/main';
import http from './instance';

export const flyerCount = async () => {
  try {
    const {
      data: { allCount },
    }: FlyerCountResponse = await http.get(API_URLS.MAIN.COUNT);
    return allCount;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export interface FlyerListParams {
  search?: string;
  category?: string;
  tag?: string;
  sort?: string;
}

export const flyerList = async (page: number, params: FlyerListParams) => {
  try {
    const {
      pageData: { content, last },
    }: FlyerListResponse = await http.get(API_URLS.MAIN.POSTS, {
      params: {
        page,
        ...params,
      },
    });
    return {
      data: content,
      isLast: last,
      nextPage: page + 1,
    };
  } catch (error) {
    console.error(error);
    return {
      data: [],
      isLast: true,
      nextPage: 1,
    };
  }
};
