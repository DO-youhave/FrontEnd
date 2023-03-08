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
