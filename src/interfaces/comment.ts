export interface CommentsProps {
  postId: number;
  rows: boolean;
  setRows: React.Dispatch<React.SetStateAction<boolean>>;
  rowsBottom: boolean;
  setRowsBottom: React.Dispatch<React.SetStateAction<boolean>>;
}
