import { API_URLS } from './../constants/apiUrls';
import http from './instance';

interface FlyerRegisterResponse {
  code: string;
  data: {
    postId: number;
  };
  msg: string;
  success: boolean;
}

export const flyerRegister = async (data: FormData) => {
  try {
    const { success }: FlyerRegisterResponse = await http.post(
      API_URLS.POST.REGISTER,
      data
    );
    return success;
  } catch (error) {
    return false;
  }
};

export const flyerUpdate = async (data: FormData, postId: number) => {
  try {
    const { success }: FlyerRegisterResponse = await http.post(
      API_URLS.POST.EDIT(postId),
      data
    );
    return success;
  } catch (error) {
    return false;
  }
};
