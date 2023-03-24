import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import { COLORS } from '../constants/colors';
import { ROUTES } from '../constants/routes';
import { isLogin } from '../utils/storage';

const Header = () => {
  const navigate = useNavigate();
  const { pathname: path } = useLocation();
  const { HOME, STREET, POSTING, MY_PAGE, LOGIN } = ROUTES;
  const background = path.includes(MY_PAGE.ROOT) ? COLORS.MAIN : 'none';
  const isLoginMember = () => {
    if (!isLogin()) {
      alert('로그인을 하면 전단지를 붙일 수 있어요 🙀');
      navigate(LOGIN);
    } else {
      navigate(POSTING);
    }
  };
  return (
    <Container
      id={path === HOME ? 'fix' : ''}
      style={{ background: background }}>
      <MainLogo onClick={() => navigate(HOME)}>
        <Logo src='/img/logo.svg' alt='' />
        <LogoText
          style={{ color: path.includes(MY_PAGE.ROOT) ? '#fff' : '#000' }}>
          있어요?
        </LogoText>
      </MainLogo>

      {/* 데스크탑 menu */}
      <MenuList
        style={{ color: path.includes(MY_PAGE.ROOT) ? '#fff' : '#000' }}>
        {path !== STREET.ROOT && (
          <Menu onClick={() => navigate(STREET.DETAIL('', '', 'DATE', ''))}>
            전단지 골목 가기
          </Menu>
        )}
        <Menu onClick={isLoginMember}>전단지 붙이기</Menu>
        {!isLogin() ? (
          <Menu onClick={() => navigate(LOGIN)}>로그인 / 회원가입</Menu>
        ) : (
          <Menu onClick={() => navigate(MY_PAGE.ROOT + '/' + MY_PAGE.RECENT)}>
            마이페이지
          </Menu>
        )}
      </MenuList>

      {/* 모바일 menu */}
      <MenuList id='mobile'>
        {path === HOME && (
          <NavIcon
            src='/img/street.svg'
            alt='street'
            height={26}
            onClick={() => navigate(STREET.DETAIL('', '', 'DATE', ''))}
          />
        )}
        {path.includes(MY_PAGE.ROOT) ? (
          <NavIcon
            id='write'
            src='/img/writeW.svg'
            alt='write'
            onClick={() => navigate(POSTING)}
          />
        ) : (
          <NavIcon
            id='write'
            src='/img/write.svg'
            alt='write'
            height={25}
            onClick={() => navigate(POSTING)}
          />
        )}

        {isLogin() && (
          <NavIcon
            onClick={() => navigate(MY_PAGE.ROOT + '/' + MY_PAGE.RECENT)}
            src='/img/profile.svg'
            alt='profile'
          />
        )}
      </MenuList>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 26px 10%;
  &#fix {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
  @media screen and (max-width: 1024px) {
    padding: 20px 5%;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 5%;
  }
`;

const MainLogo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
  margin-right: 5px;
  @media screen and (max-width: 768px) {
    width: 30px;
  }
`;

const LogoText = styled.div`
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    font-weight: 500;
  }
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 80px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  &#mobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
      align-items: flex-end;
      gap: 20px;
    }
  }
`;
const Menu = styled.li`
  cursor: pointer;
  font-weight: 600;
`;

const NavIcon = styled.img`
  cursor: pointer;
  width: 25px;
  &#write {
    stroke: #fff;
    fill: #fff;
  }
`;
