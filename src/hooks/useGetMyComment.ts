import { useEffect, useState } from 'react';

import { myComment } from '../apis/User';
import { Comment } from '../interfaces/user';

const useGetMyComment = () => {
  const [comment, setComment] = useState<Comment[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getComment = async () => {
      setLoading(true);
      const data = await myComment();
      setComment(data);
      setLoading(false);
    };
    getComment();
  }, []);

  return { comment, loading };
};

export default useGetMyComment;
