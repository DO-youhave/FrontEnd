import styled from '@emotion/styled';

import { ROUTES } from '../../constants/routes';

interface OAuthButtonProps {
  type: 'naver' | 'kakao';
}

const OAuthButton = ({ type }: OAuthButtonProps) => {
  const loginTitle = {
    naver: '네이버로 로그인',
    kakao: '카카오로 로그인',
  };
  const handleClickNaver = () => (location.href = ROUTES.NAVER_LOGIN);
  const handleClickKakao = () => (location.href = ROUTES.KAKAO_LOGIN);

  const handleClick = {
    naver: handleClickNaver,
    kakao: handleClickKakao,
  };

  return (
    <Button id={type} onClick={handleClick[type]}>
      {loginTitle[type]}
    </Button>
  );
};

export default OAuthButton;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 55px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  &#kakao {
    background: url('/img/kakaoLogo.svg') no-repeat 20px 50%;
    background-color: #fee500;
    color: #000;
  }
  &#naver {
    background: url('/img/naverLogo.svg') no-repeat 20px 50%;
    background-color: #03c75a;
    color: #fff;
  }

  @media all and (max-width: 767px) {
    width: 100%;
    height: 45px;
    font-size: 17px;
    font-weight: 500;
    margin-top: 10px;
    &#naver {
      background-size: 20px;
    }
    &#kakao {
      background-size: 20px;
    }
  }
`;
