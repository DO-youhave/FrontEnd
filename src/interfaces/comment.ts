import { Comment as CommentType } from '../apis/Comments';

export interface CommentsProps {
  postId: number;
  rows: boolean;
  setRows: React.Dispatch<React.SetStateAction<boolean>>;
  rowsBottom: boolean;
  setRowsBottom: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CommentProps {
  postId: number;
  commentId: number;
  name: string;
  content: string;
  createdDate: string;
  childComments: CommentType[];
  isCommentWriter: boolean;
}
