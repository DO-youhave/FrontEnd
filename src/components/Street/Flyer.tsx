import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import { isLogin } from '../../utils/storage';

interface FlyerProps {
  postId: number;
  id?: string;
  title: string;
  tags: string[];
  imgUrl: string | null;
}

const Flyer = ({ postId, id, title, tags, imgUrl }: FlyerProps) => {
  const navigate = useNavigate();
  const isLoginMember = () => {
    if (!isLogin()) {
      alert('회원만 볼 수 있어요 🙀');
      navigate(ROUTES.LOGIN);
    } else {
      navigate(ROUTES.FLYER.DETAIL(postId));
    }
  };

  return (
    <Container
      key={postId}
      className={id}
      id={imgUrl ? 'img' : ''}
      onClick={isLoginMember}>
      <Inner>
        <Card id='front'>
          <Title>{title}</Title>
          <Tags>
            {tags.map((tag) => (
              <Tag key={tag}>#{tag}</Tag>
            ))}
          </Tags>
        </Card>

        <Card id='back'>
          <img src={imgUrl || ''} alt='flip image' width={200} height={200} />
        </Card>
      </Inner>
    </Container>
  );
};

export default Flyer;

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &#front {
    background: url('/img/flyerBg.png') no-repeat center center;
    background-size: cover;
    padding: 15px;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.3;
  }
  &#back {
    transform: rotateY(180deg);
  }
`;

const Container = styled.li`
  height: 300px;
  cursor: pointer;
  perspective: 1000px;
  background-color: transparent;
  list-style: none;
  &.myPosting {
    height: 250px;
  }
  @media screen and (max-width: 768px) {
    height: 250px;
    font-size: 20px;
  }
  @media screen and (max-width: 576px) {
    height: 200px;
    font-size: 16px;
  }
  &#img {
    &:hover ${Inner} {
      transform: rotateY(-180deg);
    }
  }
`;

const Title = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  height: 85px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Tag = styled.div`
  margin-bottom: 10px;
  &#none {
    margin-bottom: 0;
  }
`;
