import {
  MyPostResponse,
  RecentNotificationResponse,
  UserProfileResponse,
} from '../interfaces/user';
import { API_URLS } from './../constants/apiUrls';
import { MyCommentResponse } from './../interfaces/user';
import http from './instance';

export const userProfile = async () => {
  try {
    const { data }: UserProfileResponse = await http.get(API_URLS.USER.PROFILE);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const recentNotification = async () => {
  try {
    const { data }: RecentNotificationResponse = await http.get(
      API_URLS.USER.MYPAGE.NOTIFICATION
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const myPost = async () => {
  try {
    const {
      pageData: { content },
    }: MyPostResponse = await http.get(API_URLS.USER.MYPAGE.POST);
    return content;
  } catch (error) {
    console.error(error);
  }
};

export const myComment = async () => {
  try {
    const { content }: MyCommentResponse = await http.get(
      API_URLS.USER.MYPAGE.COMMENT
    );
    return content;
  } catch (error) {
    console.error(error);
  }
};
