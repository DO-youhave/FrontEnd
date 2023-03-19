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

export interface Post {
  categoryKeyword: string;
  imgUrl: string;
  postId: number;
  tags: string[];
  title: string;
}

export interface MyPostResponse {
  code: string;
  msg: string;
  pageData: {
    content: Post[];
  };
  success: boolean;
}

export interface Comment {
  commentId: number;
  content: string;
  postId: number;
  post_title: string;
}

export interface MyCommentResponse {
  content: Comment[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
}
