import { useQuery } from 'react-query';

import { commentList } from '../apis/Comments';

const useGetComments = (postId: number) => {
  const { data, isLoading } = useQuery(['comments', postId], () =>
    commentList(postId)
  );
  return { comments: data?.comments.content, isLoading };
};

export default useGetComments;
