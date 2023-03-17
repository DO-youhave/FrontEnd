import styled from '@emotion/styled';
import { useNavigate } from 'react-router';

import { ROUTES } from '../../constants/routes';
import useGetNotifications from '../../hooks/useGetNotifications';

const Recent = () => {
  const navigate = useNavigate();
  const { notifications } = useGetNotifications();

  return (
    <GridBox>
      {notifications?.map(
        ({ notificationId, commentContent, notifiedDate, postId }) => (
          <AlertBox
            key={notificationId}
            onClick={() => navigate(ROUTES.FLYER.DETAIL(postId))}>
            <BoxTape src='/img/tape.svg' alt='tape' />
            <Title>
              회원님의 전단지에
              <br /> 새로운 댓글이 달렸어요.
            </Title>
            <Content>{`"${commentContent}"`}</Content>
            <Date>{notifiedDate}</Date>
          </AlertBox>
        )
      )}
    </GridBox>
  );
};

export default Recent;

const GridBox = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px 50px;
  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px 20px;
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AlertBox = styled.div`
  height: 220px;
  padding: 30px 10px;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: url('/img/flyerBg.png') no-repeat center center;
  background-size: cover;
  transition: box-shadow 0.1s ease;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  &:hover {
    box-shadow: 0px 0px 0px;
  }
  @media screen and (max-width: 576px) {
    background: #fff;
    
`;

const BoxTape = styled.img`
  position: absolute;
  width: 35%;
  top: -12px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Content = styled.div`
  font-size: 14px;
  font-weight: 400;
  height: 80px;
  color: #6e6e6e;
  line-height: 1.3;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  text-align: right;
  margin-top: auto;
  color: #6e6e6e;
`;
