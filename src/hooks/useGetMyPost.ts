import { useEffect, useState } from 'react';

import { myPost } from '../apis/User';
import { Post } from '../interfaces/user';

const useGetMyPost = () => {
  const [post, setPost] = useState<Post[]>();

  useEffect(() => {
    const getMyPost = async () => {
      const data = await myPost();
      setPost(data);
    };
    getMyPost();
  }, []);

  return { post };
};

export default useGetMyPost;
