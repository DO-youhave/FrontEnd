import styled from '@emotion/styled';

import Flyer from '../components/shared/Flyer';
import OAuthButton from '../components/shared/OAuthButton';

const Login = () => {
  return (
    <Container>
      <Header>
        <div>
          <img
            src='/img/detailBack.png'
            alt='뒤로가기'
            width={35}
            height={35}
          />
        </div>
        <div style={{ fontWeight: '600', fontSize: '18px' }}>
          로그인/회원가입
        </div>
        <AdjustWidth />
      </Header>

      <Contents>
        <Flyer id='login'>
          <TextBox>
            있어요?
            <Msg>
              간편하게 로그인하고
              <br />
              전단지 한 장 붙이러 가요!
            </Msg>
          </TextBox>
        </Flyer>
        <LoginBox>
          <OAuthButton type='naver' />
          <OAuthButton type='kakao' />
        </LoginBox>
      </Contents>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  border-bottom: 1px solid #adadad;
  background-color: #e9e9e9;
`;

const TextBox = styled.div`
  font-size: 36px;
  text-align: center;
  font-weight: 600;
  line-height: 2;
`;
const Msg = styled.span`
  display: block;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.6;
`;

const AdjustWidth = styled.div`
  width: 45px;
  height: 45px;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e9e9e9;
`;
const LoginBox = styled.div`
  margin-top: 20px;

  @media all and (max-width: 767px) {
    width: 90%;
  }
`;
