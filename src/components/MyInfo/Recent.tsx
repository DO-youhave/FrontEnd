import styled from '@emotion/styled';
import { useNavigate } from 'react-router';

import { ROUTES } from '../../constants/routes';
import useGetNotifications from '../../hooks/useGetNotifications';
import Flyer from './Flyer';

const Recent = () => {
  const navigate = useNavigate();
  const { notifications } = useGetNotifications();

  return (
    <GridBox>
      {notifications?.map(
        ({ notificationId, commentContent, notifiedDate, postId }) => (
          <Flyer
            key={notificationId}
            id={notificationId}
            onClick={() => navigate(ROUTES.FLYER.DETAIL(postId))}>
            <Title>
              회원님의 전단지에
              <br /> 새로운 댓글이 달렸어요.
            </Title>
            <Content>{`"${commentContent}"`}</Content>
            <Date>{notifiedDate}</Date>
          </Flyer>
        )
      )}
    </GridBox>
  );
};

export default Recent;

export const GridBox = styled.div`
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
