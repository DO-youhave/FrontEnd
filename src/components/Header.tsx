import styled from '@emotion/styled';

const Header = () => {
  return (
    <Container>
      <div>
        <div>
          <img src='' alt='' />
        </div>
        <LogoText>있어요?</LogoText>
      </div>

      <MenuList>
        <li>전단지 골목 가기</li>
        <li>전단지 붙이기</li>
        <li>로그인 / 회원가입</li>
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
const LogoText = styled.div`
  font-weight: 700;
`;
const MenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 80px;
`;
