import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { COLORS } from '../../constants/colors';
import { ROUTES } from '../../constants/routes';
import useCountNumber from '../../hooks/useCountNumber';
import Flyer from '../shared/Flyer';
import { OAuthButton } from './LoginSection';

const MainSection = () => {
  const navigate = useNavigate();
  const goStreet = () => navigate(ROUTES.STREET.DETAIL('total', '', 'new', ''));
  const count = useCountNumber(77);

  return (
    <Section>
      <Container>
        <Title>
          지금까지
          <br /> 붙여진 전단지 <br />
          <Title id='count'>{count}</Title>개
        </Title>

        <Flyer>
          <FlyerTitle>
            나이키 신발
            <FlyerTitle id='have'>있어요?</FlyerTitle>
          </FlyerTitle>
          <Tags>
            <span>#나이키 에어포스</span>
            <span>#나이키 한정판 신발</span>
            <span>#남자 발 사이즈 270</span>
          </Tags>
        </Flyer>

        <Button onClick={goStreet}>전단지 골목 가기</Button>
      </Container>

      {/* 모바일 */}
      <ContainerMob>
        <Flyer>
          <FlyerTitle>
            나이키 신발
            <FlyerTitle id='have'>있어요?</FlyerTitle>
          </FlyerTitle>
          <Tags>
            <span>#나이키 에어포스</span>
            <span>#나이키 한정판 신발</span>
            <span>#남자 발 사이즈 270</span>
          </Tags>
        </Flyer>

        <TitleMob>
          지금까지 붙여진 전단지 <br />
          <TitleMob id='count'>{count}</TitleMob>개
        </TitleMob>

        {/* 비로그인 - 로그인 버튼 */}
        <LoginMob>
          <OAuthButton id='naver'>네이버로 로그인</OAuthButton>
          <OAuthButton id='kakao'>카카오로 로그인</OAuthButton>
        </LoginMob>

        {/* 로그인 - 전단지 골목 가기 버튼 */}
        <div>
          <Button onClick={goStreet}>전단지 골목 가기</Button>
        </div>
      </ContainerMob>
    </Section>
  );
};

export default MainSection;

const Section = styled.div`
  height: 100vh;
  background: url('/img/flyers.png') no-repeat center center;
  background-size: 90%;
  background-color: #f8f8f8;
  @media all and (max-width: 767px) {
    background: url('/img/mainBgMob.png') center top;
    background-size: 150% auto;
  }
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media all and (max-width: 767px) {
    display: none;
  }
`;
const ContainerMob = styled.div`
  display: none;
  @media all and (max-width: 767px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 70px;
  }
`;

const Title = styled.span`
  font-family: 'Black Han Sans', sans-serif;
  font-size: 3rem;
  &#count {
    color: ${COLORS.MAIN};
  }
  @media all and (max-width: 767px) {
    display: none;
  }
`;
const TitleMob = styled.span`
  display: none;
  @media all and (max-width: 767px) {
    display: inline-block;
    text-align: center;
    font-family: 'Black Han Sans', sans-serif;
    font-size: 2rem;
    &#count {
      color: ${COLORS.MAIN};
    }
  }
`;

const LoginMob = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
`;

const Button = styled.button`
  padding: 20px 60px 20px 30px;
  border: none;
  border-radius: 8px;
  background: url('/img/arrow.svg') no-repeat;
  background-position: 85% 53%;
  background-size: 13px;
  background-color: #373737;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  @media all and (max-width: 767px) {
    font-weight: 500;
    margin-top: 30px;
    display: none;
  }
`;

const FlyerTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.4;
  &#have {
    font-weight: 900;
  }
  @media all and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  @media all and (max-width: 767px) {
    gap: 10px;
  }
`;
