import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { COLORS } from '../../constants/colors';
import { ROUTES } from '../../constants/routes';
import useCountNumber from '../../hooks/useCountNumber';
// import useGetCount from '../../hooks/useGetCount';
import { isLogin } from '../../utils/storage';
import Flyer from '../shared/Flyer';
import OAuthButton from '../shared/OAuthButton';

const MainSection = () => {
  const navigate = useNavigate();
  // const number = useGetCount();
  const count = useCountNumber(6);
  const goStreet = () => navigate(ROUTES.STREET.DETAIL('', '', 'DATE', ''));

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
            고민 해결해줄 사람
            <FlyerTitle id='have'>있어요?</FlyerTitle>
          </FlyerTitle>
          <Tags>
            <span>#취업자소서봐주세요</span>
            <span>#성격이소심해요</span>
            <span>#아이가말을안들어요</span>
          </Tags>
        </Flyer>

        <Button onClick={goStreet}>전단지 골목 가기</Button>
      </Container>

      {/* 모바일 */}
      <ContainerMob>
        <Flyer>
          <FlyerTitle>
            고민 해결해줄 사람
            <FlyerTitle id='have'>있어요?</FlyerTitle>
          </FlyerTitle>
          <Tags>
            <span>#취업자소서봐주세요</span>
            <span>#성격이소심해요</span>
            <span>#아이가말을안들어요</span>
          </Tags>
        </Flyer>

        <TitleMob>
          지금까지 붙여진 전단지 <br />
          <TitleMob id='count'>{count}</TitleMob>개
        </TitleMob>

        {!isLogin() ? (
          <LoginMob>
            <OAuthButton type='naver' />
            <OAuthButton type='kakao' />
          </LoginMob>
        ) : (
          <Button onClick={goStreet}>전단지 골목 가기</Button>
        )}
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
  margin-top: 8px;
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
  }
`;

export const FlyerTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.4;
  &#have {
    font-weight: 900;
    font-size: 1.8rem;
  }
  @media all and (max-width: 767px) {
    font-size: 1.2rem;
    &#have {
      font-weight: 900;
      font-size: 1.7rem;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
  @media all and (max-width: 767px) {
    gap: 10px;
  }
`;
