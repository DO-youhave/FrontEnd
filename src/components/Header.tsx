import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import { TOKEN_KEY } from '../constants/auth';
import { COLORS } from '../constants/colors';
import { ROUTES } from '../constants/routes';
import { getLocalStorage } from '../utils/storage';

const Header = () => {
  const navigate = useNavigate();
  const isLogin = getLocalStorage(TOKEN_KEY);
  const { pathname: path } = useLocation();
  const { HOME, STREET, POSTING, MY_PAGE } = ROUTES;
  const background = path.includes(MY_PAGE.ROOT) ? COLORS.MAIN : 'none';
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

      <MenuList
        style={{ color: path.includes(MY_PAGE.ROOT) ? '#fff' : '#000' }}>
        {path !== STREET.ROOT && (
          <Menu onClick={() => navigate(STREET.DETAIL('total', 'new', ''))}>
            전단지 골목 가기
          </Menu>
        )}
        <Menu onClick={() => navigate(POSTING)}>전단지 붙이기</Menu>
        <Menu>로그인 / 회원가입</Menu>
      </MenuList>
      <MenuList id='mobile'>
        {path === HOME && (
          <NavIcon
            src='/img/street.svg'
            alt='street'
            onClick={() => navigate(STREET.DETAIL('total', 'new', ''))}
          />
        )}
        <NavIcon
          src='/img/write.svg'
          alt='write'
          height={26}
          onClick={() => navigate(POSTING)}
        />
        {isLogin && <NavIcon src='/img/profile.svg' alt='profile' />}
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
  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 10px 0;
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
`;

const LogoText = styled.div`
  font-weight: 700;
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
      gap: 15px;
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
`;
