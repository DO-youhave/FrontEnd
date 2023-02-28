import styled from '@emotion/styled';

import { COLORS } from '../../constants/colors';

const Profile = () => {
  return (
    <div style={{ position: 'absolute', width: '80%', top: '130px' }}>
      <Container>
        <ProfileImg src='/img/profile.svg' alt='profile' />
        <MyPosting>
          내가 붙인 전단지<Count>10개</Count>
        </MyPosting>
        <MyPosting id='border'>
          내가 쓴 댓글<Count>10개</Count>
        </MyPosting>
        <MyPosting>
          내가 북마크한 전단지<Count>10개</Count>
        </MyPosting>
      </Container>
    </div>
  );
};

export default Profile;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 20px;
  position: relative;
  background-color: #fff;
  width: 100%;
  padding: 40px 0px;
  box-shadow: 0px 3px 80px 5px rgba(0, 0, 0, 0.1);
`;

const MyPosting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  gap: 10px;
  height: 150px;
  &#border {
    border-left: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
  }
`;

const Count = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${COLORS.MAIN};
`;

const ProfileImg = styled.img`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
`;
