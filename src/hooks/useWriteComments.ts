import { SetStateAction, useState } from 'react';
import { useMutation } from 'react-query';

import { writeComment } from '../apis/Comments';
import { queryClient } from '../main';

const useWriteComments = (
  postId: number,
  setRows: React.Dispatch<SetStateAction<boolean>>,
  setRowsBottom: React.Dispatch<SetStateAction<boolean>>
) => {
  const [commentInput, setCommentInput] = useState<string>('');
  const [commentInputBottom, setCommentInputBottom] = useState<string>('');

  const onSuccess = () => {
    alert('댓글이 등록되었습니다!');
    queryClient.invalidateQueries(['comments', postId]);
  };

  const { mutate: top } = useMutation(
    () => writeComment(postId, { content: commentInput }),
    {
      onSuccess: onSuccess,
    }
  );
  const { mutate: bottom } = useMutation(
    () => writeComment(postId, { content: commentInputBottom }),
    {
      onSuccess: onSuccess,
    }
  );
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setCommentInput(e.target.value);

  const handleChangeBottom = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setCommentInputBottom(e.target.value);

  const handleSubmit = () => {
    if (confirm('댓글을 등록하시겠습니까?')) {
      top();
      setCommentInput('');
      setRows(false);
    }
  };

  const handleSubmitBottom = () => {
    if (confirm('댓글을 등록하시겠습니까?')) {
      bottom();
      setCommentInputBottom('');
      setRowsBottom(false);
    }
  };

  const handleInputLength = () => {
    return commentInput.length === 0 || commentInput.length === 301
      ? true
      : false;
  };

  const handleInputLengthBottom = () => {
    return commentInputBottom.length === 0 || commentInputBottom.length === 301
      ? true
      : false;
  };

  return {
    commentInput,
    commentInputBottom,
    handleChange,
    handleChangeBottom,
    handleSubmit,
    handleSubmitBottom,
    handleInputLength,
    handleInputLengthBottom,
  };
};

export default useWriteComments;
