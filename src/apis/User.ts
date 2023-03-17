import { API_URLS } from './../constants/apiUrls';
import http from './instance';

export interface Profile {
  bookmarkCount: number;
  commentCount: number;
  email: string;
  img: string;
  nickname: string;
  postCount: number;
  socialType: string;
  userId: number;
}

export interface UserProfileResponse {
  code: string;
  data: Profile;
  msg: string;
  success: boolean;
}

export interface Notification {
  commentContent: string;
  notificationId: number;
  notifiedDate: string;
  postId: number;
  postTitle: string;
}

export interface RecentNotificationResponse {
  code: string;
  data: Notification[];
  msg: string;
  success: boolean;
}

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
