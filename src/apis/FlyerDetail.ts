import { API_URLS } from '../constants/apiUrls';
import { FlyerInfoResponse } from '../interfaces/flyerDetail';
import http from './instance';

export const FlyerDetail = async () => {
  try {
    const { data }: FlyerInfoResponse = await http.get(
      API_URLS.POST.DETAIL('5')
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
