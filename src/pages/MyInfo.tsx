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

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 20%;
  margin-top: 30px;
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
`;

const SeperateLine = styled.div`
  width: 35%;
  height: 1px;
  background-color: #cdcdcd;
`;
