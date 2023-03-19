import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { kakaoLogin, naverLogin } from '../apis/Auth';
import Loading from '../components/shared/Loading';
import { ROUTES } from '../constants/routes';

interface RedirectProps {
  type: 'naver' | 'kakao';
}

const Redirect = ({ type }: RedirectProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code') || '';
  const state = searchParams.get('state') || '';
  const redirectUrl = import.meta.env.VITE_KAKAO_CALLBACK_URL;
  const data = {
    naver: { code, state },
    kakao: { code, redirectUrl },
  };
  const loginApi = {
    naver: naverLogin,
    kakao: kakaoLogin,
  };
  useEffect(() => {
    try {
      const login = async () => {
        const { isLoginFailed } = await loginApi[type](data[type]);
        if (!isLoginFailed) {
          navigate(ROUTES.HOME);
        }
      };
      login();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Container>
      <Loading>로그인 중입니다.</Loading>
    </Container>
  );
};

export default Redirect;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
`;
