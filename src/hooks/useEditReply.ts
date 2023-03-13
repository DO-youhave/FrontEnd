import { SetStateAction } from 'react';
import { useMutation } from 'react-query';

import { editReply } from '../apis/Comments';
import { queryClient } from '../main';

const useEditReply = (
  postId: number,
  commentId: number,
  saveReply: string,
  setOnEdit: React.Dispatch<SetStateAction<boolean>>
) => {
  const onSuccess = () => {
    alert('수정되었습니다!');
    queryClient.invalidateQueries(['comments', postId]);
  };

  const { mutate } = useMutation(
    () => editReply(postId, commentId, { content: saveReply }),
    {
      onSuccess: onSuccess,
    }
  );

  const completeEdit = () => {
    if (confirm('수정하시겠어요?')) {
      mutate();
      setOnEdit(false);
    }
  };

  return { completeEdit };
};

export default useEditReply;
