import styled from '@emotion/styled';
import { Outlet, useLocation } from 'react-router-dom';

import Menus, { menus } from '../components/MyInfo/Menus';
import MobileMenus from '../components/MyInfo/MobileMenus';
import Profile from '../components/MyInfo/Profile';
import { COLORS } from '../constants/colors';
import useGetProfile from '../hooks/useGetProfile';

const MyInfo = () => {
  const { profile } = useGetProfile();
  const { pathname } = useLocation();
  const name = menus.find(({ id }) => pathname.includes(id))?.name;

  return (
    <Container>
      <Title>
        안녕하세요,{' '}
        <span style={{ fontWeight: '700' }}>{profile?.nickname}</span>님!
      </Title>
      <Profile
        profileImg={profile?.img}
        postCount={profile?.postCount || 0}
        bookmarkCount={profile?.bookmarkCount || 0}
        commentCount={profile?.commentCount || 0}
      />
      <Content>
        <MenuNContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pathname>{name}</Pathname>
            <Menus />
          </div>
          <MobileMenus />
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
  @media screen and (max-width: 768px) {
    font-size: 20px;
    width: 90%;
    margin: 30px 0px 150px 0px;
  }
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
  @media screen and (max-width: 768px) {
    padding: 100px 0px 50px 0px;
  }
`;

const MenuNContent = styled.div`
  display: flex;
  width: 80%;
  background-color: #fff;
  justify-content: space-between;
  border-radius: 20px;
  padding: 80px 60px;
  min-height: 600px;
  @media screen and (max-width: 768px) {
    padding: 0px;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #f5f6f8;
    width: 90%;
`;

const Pathname = styled.div`
  font-size: 23px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
