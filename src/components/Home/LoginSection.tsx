import styled from '@emotion/styled';

import { COLORS } from '../../constants/colors';

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
          <OAuthButton id='naver'>네이버로 로그인</OAuthButton>
          <OAuthButton id='kakao'>카카오로 로그인</OAuthButton>
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
`;

const Container = styled.div`
  padding: 100px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 2px solid #d9d9d9;
  border-radius: 45px;
`;

const OAuthButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 60px;
  margin: 20px 0px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  &#kakao {
    background: url('/img/kakaoLogo.svg') no-repeat 20px 50%;
    background-color: #fee500;
  }
  &#naver {
    background: url('/img/naverLogo.svg') no-repeat 20px 50%;
    background-color: #03c75a;
    color: #fff;
  }
`;

const Title = styled.span`
  font-size: 3rem;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 20px;
  &#empha {
    color: ${COLORS.MAIN};
  }
`;

const Sub = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 70px;
`;
