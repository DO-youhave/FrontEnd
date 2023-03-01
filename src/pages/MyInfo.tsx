import styled from '@emotion/styled';
import { Outlet, useLocation } from 'react-router-dom';

import Menus, { menus } from '../components/MyInfo/Menus';
import Profile from '../components/MyInfo/Profile';
import { COLORS } from '../constants/colors';

const MyInfo = () => {
  const { pathname } = useLocation();
  const name = menus.find(({ id }) => pathname.includes(id))?.name;

  return (
    <Container>
      <Title>
        안녕하세요, <span style={{ fontWeight: '700' }}>ㅇㅇㅇ</span>님!
      </Title>
      <Profile />
      <Content>
        <MenuNContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <h2>{name}</h2>
            <Menus />
          </div>
          <Outlet />
        </MenuNContent>
      </Content>
    </Container>
  );
};

export default MyInfo;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  background-color: ${COLORS.MAIN};
`;

const Title = styled.div`
  font-size: 24px;
  color: #fff;
  margin: 50px 0px 200px 0px;
  width: 75%;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f5f6f8;
  padding: 150px 0px 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const MenuNContent = styled.div`
  display: flex;
  width: 80%;
  background-color: #fff;
  justify-content: space-between;
  border-radius: 20px;
  padding: 80px 60px;
  min-height: 600px;
`;
