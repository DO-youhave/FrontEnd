import { API_URLS } from '../constants/apiUrls';
import http from './instance';

export interface Comment {
  commentId: number;
  createdDate: string;
  name: string;
  content: string;
  isRemoved: boolean;
  isCommentWriter: boolean;
}

export interface Comments {
  commentId: number;
  createdDate: string;
  name: string;
  content: string;
  isRemoved: boolean;
  isCommentWriter: boolean;
  childComments: Comment[];
}

export interface CommentListResponse {
  code: string;
  data: {
    isWriter: boolean;
    comments: {
      content: Comments[];
      totalElements: number;
    };
  };
}

export const commentList = async (postId: number) => {
  try {
    const { data }: CommentListResponse = await http.get(
      API_URLS.COMMENT.LIST(postId)
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const writeComment = async (
  postId: number,
  data: { content: string }
) => {
  try {
    return http.post(API_URLS.COMMENT.REGISTER(postId), data);
  } catch (error) {
    console.error(error);
  }
};

export const writeReply = async (
  postId: number,
  data: { parentId: number; content: string }
) => {
  try {
    return http.post(API_URLS.COMMENT.REGISTER(postId), data);
  } catch (error) {
    console.error(error);
  }
};

export const removeComment = async (postId: number, commentId: number) => {
  try {
    return http.delete(API_URLS.COMMENT.DELETE(postId, commentId));
  } catch (error) {
    console.error(error);
  }
};
