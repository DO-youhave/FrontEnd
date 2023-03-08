import { useEffect, useState } from 'react';

import { commentList, Comments } from '../apis/Comments';

const useGetComments = (postId: number) => {
  const [comments, setComments] = useState<Comments[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
      const data = await commentList(postId);
      setComments(data?.comments.content);
      setIsLoading(false);
    };
    getComments();
  }, []);

  return { comments, isLoading };
};

export default useGetComments;
