import styled from '@emotion/styled';

import { COLORS } from '../../constants/colors';

interface ProfileProps {
  profileImg: string | undefined;
  postCount: number;
  bookmarkCount: number;
  commentCount: number;
}

const Profile = ({
  profileImg,
  postCount,
  bookmarkCount,
  commentCount,
}: ProfileProps) => {
  return (
    <Absolute>
      <Container>
        <ProfileImg src={profileImg || '/img/profile.svg'} alt='profile' />
        <MyPosting>
          내가 붙인 전단지<Count>{postCount}개</Count>
        </MyPosting>
        <MyPosting id='border'>
          내가 쓴 댓글<Count>{commentCount}개</Count>
        </MyPosting>
        <MyPosting>
          북마크한 전단지<Count>{bookmarkCount}개</Count>
        </MyPosting>
      </Container>
    </Absolute>
  );
};

export default Profile;

const Absolute = styled.div`
  position: absolute;
  width: 80%;
  top: 130px;
  @media screen and (max-width: 768px) {
    width: 90%;
    top: 100px;
  }
`;

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
  @media screen and (max-width: 768px) {
    font-size: 14px;
    height: 100px;
  }
  @media screen and (max-width: 576px) {
    font-size: 12px;
    height: 80px;
  }
`;

const Count = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${COLORS.MAIN};
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`;

const ProfileImg = styled.img`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  width: 100px;
  @media screen and (max-width: 768px) {
    width: 80px;
  }
  @media screen and (max-width: 576px) {
    width: 60px;
    top: -35px;
  }
`;
