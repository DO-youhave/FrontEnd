import styled from '@emotion/styled';

import { COLORS } from '../../constants/colors';
import OAuthButton from '../shared/OAuthButton';

const LoginSection = () => {
  return (
    <Section id='last'>
      <Container>
        <Title>
          <Title id='empha'>10초</Title>면 가입할 수 있어요
        </Title>
        <Sub>간편하게 로그인하고 전단지 한 장 붙이러가요!</Sub>
        <span>소셜 간편 로그인</span>
        <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
          <OAuthButton type='naver' />
          <OAuthButton type='kakao' />
        </div>
      </Container>
    </Section>
  );
};

export default LoginSection;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
  @media all and (max-width: 767px) {
    display: none;
  }
`;

const Container = styled.div`
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 2px solid #d9d9d9;
  border-radius: 45px;
`;

const Title = styled.span`
  font-size: 2.7rem;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 20px;
  &#empha {
    color: ${COLORS.MAIN};
  }
`;

const Sub = styled.span`
  font-size: 1.2rem;
  display: inline-block;
  margin-bottom: 50px;
`;
