import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import useGetMyComment from '../../hooks/useGetMyComment';
import Flyer from './Flyer';
import { Content, GridBox, Title } from './Recent';

const MyComment = () => {
  const navigate = useNavigate();
  const { comment } = useGetMyComment();
  return (
    <GridBox>
      {comment?.map(({ commentId, postId, post_title, content }) => (
        <Flyer
          key={commentId}
          id={postId}
          onClick={() => navigate(ROUTES.FLYER.DETAIL(postId))}>
          <Title>{post_title}</Title>
          <Content id='comment'>{`“${content}”`}</Content>
        </Flyer>
      ))}
    </GridBox>
  );
};

export default MyComment;
