import { useMutation } from 'react-query';

import { removeComment } from '../apis/Comments';
import { queryClient } from '../main';

const useRemoveComment = (postId: number, commentId: number) => {
  const onSuccess = () => {
    alert('댓글이 삭제되었습니다!');
    queryClient.invalidateQueries(['comments', postId]);
  };

  const { mutate } = useMutation(() => removeComment(postId, commentId), {
    onSuccess: onSuccess,
  });

  const isRemove = () => {
    if (confirm('댓글을 삭제하시겠어요?')) {
      mutate();
    }
  };

  return { isRemove };
};

export default useRemoveComment;
