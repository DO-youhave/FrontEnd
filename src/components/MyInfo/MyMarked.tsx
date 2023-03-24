import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import useGetMarkedFlyer from '../../hooks/useGetMarkedFlyer';
import Flyer from './Flyer';
import { Tag, Tags } from './MyPosting';
import { GridBox, Title } from './Recent';

const MyMarked = () => {
  const navigate = useNavigate();
  const { flyer } = useGetMarkedFlyer();
  return (
    <GridBox>
      {flyer?.map(({ postId, title, tags }) => (
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

export default MyMarked;
