import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

interface FlyerProps {
  postId: number;
  title: string;
  tags: string[];
  imgUrl: string | null;
}

const Flyer = ({ postId, title, tags, imgUrl }: FlyerProps) => {
  const navigate = useNavigate();
  const goDetail = () => navigate(ROUTES.FLYER.DETAIL(postId));

  return (
    <Container key={postId} img={imgUrl} onClick={goDetail}>
      <Title>{title}</Title>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
      </Tags>
    </Container>
  );
};

export default Flyer;

const Container = styled.li<{ img: string | null }>`
  background-color: #000;
  margin-bottom: 30px;
  height: 300px;
  background: url('/img/flyerBg.png') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.1s ease;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  padding: 0 12px;
  text-align: center;
  &:hover {
    box-shadow: 0px 0px 0px;
    background: url(${({ img }) => (img ? img : '/img/flyerBg.png')}) no-repeat
      center center;
  }
  @media screen and (max-width: 768px) {
    height: 250px;
    font-size: 20px;
  }
  @media screen and (max-width: 576px) {
    height: 200px;
    font-size: 16px;
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
