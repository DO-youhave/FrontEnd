import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

const FlyerList = () => {
  const navigate = useNavigate();
  const goDetail = () => navigate(ROUTES.FLYER);
  return (
    <Container>
      <Flyer onClick={goDetail}>
        <Title>나이키 신발 찾아요</Title>
        <Tags>
          <Tag>#나이키</Tag>
          <Tag>#신발거래</Tag>
          <Tag id='none'>#사이즈240</Tag>
        </Tags>
      </Flyer>
      <Flyer>
        <Title>ㅇㅇㅇ가 입은 이 옷 제품명 좀 알려주세요!</Title>
        <Tags>
          <Tag>#ㅇㅇㅇ</Tag>
          <Tag>#연예인옷</Tag>
          <Tag id='none'>#협찬옷</Tag>
        </Tags>
      </Flyer>
      <Flyer>
        <Title>enfp는 자꾸 말 걸고 귀찮게 하는 거 싫어하나요?</Title>
        <Tags>
          <Tag>#MBTI</Tag>
          <Tag id='none'>#친구</Tag>
        </Tags>
      </Flyer>
      <Flyer>
        <Title>아이 턱받이 파실 분 있어요?</Title>
        <Tags>
          <Tag>#영유아</Tag>
          <Tag>#육아템</Tag>
          <Tag id='none'>#턱받이</Tag>
        </Tags>
      </Flyer>
      <Flyer></Flyer>
    </Container>
  );
};

export default FlyerList;

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 65px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0px 20px;
  }
`;
const Flyer = styled.li`
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
  margin-top: 30px;
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
