import { useMutation } from 'react-query';

import { editComment } from '../apis/Comments';
import { queryClient } from '../main';

const useEditComment = (
  postId: number,
  commentId: number,
  saveComment: string,
  setOnEdit: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const onSuccess = () => {
    alert('수정되었습니다!');
    queryClient.invalidateQueries(['comments', postId]);
  };
  const { mutate } = useMutation(
    () => editComment(postId, commentId, { content: saveComment }),
    {
      onSuccess: onSuccess,
    }
  );

  const completeEdit = () => {
    if (confirm('수정하시겠습니까?')) {
      mutate();
      setOnEdit(false);
    }
  };

  return { completeEdit };
};

export default useEditComment;
