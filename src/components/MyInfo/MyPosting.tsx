import useGetMyPost from '../../hooks/useGetMyPost';
import Flyer from '../Street/Flyer';
import { GridBox } from './Recent';

const MyPosting = () => {
  const { post } = useGetMyPost();
  return (
    <GridBox>
      {post?.map(({ postId, title, tags, imgUrl }) => (
        <Flyer
          key={postId}
          id='myPosting'
          postId={postId}
          title={title}
          tags={tags}
          imgUrl={imgUrl}
        />
      ))}
    </GridBox>
  );
};

export default MyPosting;
