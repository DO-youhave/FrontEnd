import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <MainLogo onClick={() => navigate('/')}>
        <div>
          <img src='' alt='' />
        </div>
        <LogoText>있어요?</LogoText>
      </MainLogo>

      <MenuList>
        <Menu onClick={() => navigate('/street?category=total&q=')}>
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
  display: flex;
  justify-content: space-between;
  padding: 26px 75px;
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
