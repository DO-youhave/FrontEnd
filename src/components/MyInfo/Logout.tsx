import styled from '@emotion/styled';

import { logout } from '../../apis/Auth';
import { COLORS } from '../../constants/colors';

const Logout = () => {
  const handleLogout = () => {
    logout();
    alert('로그아웃 되었습니다. 😊');
    window.location.href = '/';
  };

  return (
    <Container>
      <div
        style={{ textAlign: 'center', fontWeight: '400', lineHeight: '1.5' }}>
        다시 로그인하기 귀찮으실텐데
        <br /> 정말로 로그아웃 하시겠습니까 😨
      </div>
      <Button onClick={handleLogout}>로그아웃</Button>
    </Container>
  );
};

export default Logout;

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 500px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media screen and (max-width: 768px) {
    height: 200px;
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: ${COLORS.MAIN};
  color: #fff;
  font-size: 1.2rem;
  padding: 15px;
  border: none;
  width: 350px;
  border-radius: 10px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
