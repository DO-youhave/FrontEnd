import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../constants/routes';

const Header = () => {
  const { HOME, STREET } = ROUTES;
  const navigate = useNavigate();
  return (
    <Container>
      <MainLogo onClick={() => navigate(HOME)}>
        <div>
          <img src='' alt='' />
        </div>
        <LogoText>있어요?</LogoText>
      </MainLogo>

      <MenuList>
        <Menu onClick={() => navigate(STREET.DETAIL('total', 'new', ''))}>
          전단지 골목 가기
        </Menu>
        <Menu>전단지 붙이기</Menu>
        <Menu>로그인 / 회원가입</Menu>
      </MenuList>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 26px 0;
`;

const MainLogo = styled.div`
  cursor: pointer;
`;

const LogoText = styled.div`
  font-weight: 700;
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 80px;
`;
const Menu = styled.li`
  cursor: pointer;
`;
