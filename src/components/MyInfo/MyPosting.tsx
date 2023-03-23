import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import useGetMyPost from '../../hooks/useGetMyPost';
import Flyer from './Flyer';
import { GridBox, Title } from './Recent';

const MyPosting = () => {
  const navigate = useNavigate();
  const { post } = useGetMyPost();
  return (
    <GridBox>
      {post?.map(({ postId, title, tags }) => (
        <Flyer
          key={postId}
          id={postId}
          onClick={() => navigate(ROUTES.FLYER.DETAIL(postId))}>
          <Title>{title}</Title>
          <Tags>
            {tags.map((tag) => (
              <Tag key={tag}>#{tag}</Tag>
            ))}
          </Tags>
        </Flyer>
      ))}
    </GridBox>
  );
};

export default MyPosting;

export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 30px;
`;

export const Tag = styled.span`
  font-size: 14px;
  color: #6e6e6e;
`;
