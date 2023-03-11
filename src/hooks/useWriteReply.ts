import { SetStateAction, useState } from 'react';
import { useMutation } from 'react-query';

import { writeReply } from '../apis/Comments';
import { queryClient } from '../main';

const useWriteReply = (
  postId: number,
  parentId: number,
  setReplyOn: React.Dispatch<SetStateAction<boolean>>
) => {
  const [replyInput, setReplyInput] = useState(''); // 답글 입력 값

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyInput(e.target.value);
  };

  const onSuccess = () => {
    alert('댓글이 등록되었습니다!');
    queryClient.invalidateQueries(['comments', postId]);
  };

  const { mutate } = useMutation(
    () => writeReply(postId, { parentId, content: replyInput }),
    {
      onSuccess: onSuccess,
    }
  );

  const handleSubmit = () => {
    if (confirm('댓글을 등록하시겠습니까?')) {
      mutate();
      setReplyInput('');
      setReplyOn(false);
    }
  };

  // '댓글' 신고 버튼 클릭 시
  const handleReport = () => {
    if (confirm('이 댓글을 신고하시겠어요?')) {
      alert('신고되었습니다! 깨끗한 사이트를 위한 협조 감사합니다 😄');
    }
  };

  const handleInputLength = () => {
    return replyInput.length === 0 || replyInput.length > 301 ? true : false;
  };

  return {
    replyInput,
    handleChange,
    handleSubmit,
    handleReport,
    handleInputLength,
  };
};

export default useWriteReply;
