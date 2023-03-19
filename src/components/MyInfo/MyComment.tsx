import useGetMyComment from '../../hooks/useGetMyComment';
import Flyer from '../Street/Flyer';
import { GridBox } from './Recent';

const MyComment = () => {
  const { comment } = useGetMyComment();
  return (
    <GridBox>
      {comment?.map(({ commentId, postId, post_title, content }) => (
        <Flyer
          id='myPosting'
          key={commentId}
          postId={postId}
          title={post_title}
          content={content}
          imgUrl={null}
        />
      ))}
    </GridBox>
  );
};

export default MyComment;
