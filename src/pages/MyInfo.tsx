import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

import Menus from '../components/MyInfo/Menus';
import Profile from '../components/MyInfo/Profile';

const MyInfo = () => {
  return (
    <Container>
      <ProfileBox>
        <Profile />
        <SeperateLine />
        <Menus />
      </ProfileBox>
      <Outlet />
    </Container>
  );
};

export default MyInfo;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 0;
  margin: 0 auto;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 20%;
  margin-top: 30px;
`;

const SeperateLine = styled.div`
  width: 35%;
  height: 1px;
  background-color: #cdcdcd;
`;
