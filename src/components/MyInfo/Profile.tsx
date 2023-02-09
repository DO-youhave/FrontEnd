import styled from '@emotion/styled';

const Profile = () => {
  return (
    <>
      <img src='/profile.svg' alt='profile' />
      이영진님
      <MyPosting>
        <Count>10</Count>
        내가 쓴 글
      </MyPosting>
    </>
  );
};

export default Profile;

const MyPosting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #a3a3a3;
  gap: 10px;
`;

const Count = styled.div`
  font-size: 24px;
  color: #000;
`;
