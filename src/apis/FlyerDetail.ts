import { API_URLS } from '../constants/apiUrls';
import { FlyerInfoResponse } from '../interfaces/flyerDetail';
import http from './instance';

export const FlyerDetail = async (id: number) => {
  try {
    const { data }: FlyerInfoResponse = await http.get(
      API_URLS.POST.DETAIL(id)
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const ReportDetail = async (postId: number) => {
  try {
    return http.post(API_URLS.POST.REPORT(postId));
  } catch (error) {
    console.error(error);
  }
};

export const Bookmark = async (postId: number, mark: boolean) => {
  try {
    return http.patch(API_URLS.POST.BOOKMARK(postId, mark));
  } catch (error) {
    console.error(error);
  }
};
