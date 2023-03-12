import { useQuery } from 'react-query';

import { commentList } from '../apis/Comments';

const useGetComments = (postId: number) => {
  // const [comments, setComments] = useState<Comments[]>();
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const getComments = async () => {
  //     setIsLoading(true);
  //     const data = await commentList(postId);
  //     setComments(data?.comments.content);
  //     setIsLoading(false);
  //   };
  //   getComments();
  // }, []);

  // return { comments, isLoading };
  const { data, isLoading } = useQuery(['comments', postId], () =>
    commentList(postId)
  );
  return { comments: data?.comments.content, isLoading };
};

export default useGetComments;
