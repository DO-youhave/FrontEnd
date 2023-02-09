import styled from '@emotion/styled';

const menus: { id: string; name: string }[] = [
  { id: 'recent', name: '최근 알림' },
  { id: 'myPosting', name: '내가 쓴 글' },
  { id: 'myComment', name: '내가 쓴 댓글' },
  { id: 'myLike', name: '내가 찜한 전단지' },
  { id: 'logout', name: '로그아웃' },
  { id: 'withdrawal', name: '회원탈퇴' },
];

const MyInfo = () => {
  return (
    <Container>
      <ProfileBox>
        <img src='profile.svg' alt='profile' />
        이영진님
        <MyPosting>
          <Count>10</Count>
          내가 쓴 글
        </MyPosting>
        <SeperateLine />
        <Navigation>
          {menus.map(({ id, name }) => (
            <Menu key={id}>{name}</Menu>
          ))}
        </Navigation>
      </ProfileBox>
      <div>aaa</div>
    </Container>
  );
};

export default MyInfo;

const Container = styled.div`
  display: flex;
  margin-top: 30px;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 20%;
`;

const MyPosting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #a3a3a3;
  gap: 10px;
`;

const Count = styled.div`
  font-size: 20px;
  color: #000;
`;

const SeperateLine = styled.div`
  width: 40%;
  height: 1px;
  background-color: #cdcdcd;
`;

const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-left: 30px;
`;

const Menu = styled.li`
  cursor: pointer;
  color: #a3a3a3;
  &:hover {
    color: #000;
  }
`;
