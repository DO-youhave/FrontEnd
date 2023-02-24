import styled from '@emotion/styled';
import { Fragment } from 'react';

const commentExample = [
  {
    id: 1,
    profile: '익명 1',
    content:
      '가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하',
    date: '2023.02.02. 16:15',
    reply: [
      {
        id: 1,
        profile: '익명 1',
        content:
          '가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하',
        date: '2023.02.02. 16:15',
      },
    ],
  },
  {
    id: 2,
    profile: '익명 2',
    content:
      '가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하',
    date: '2023.02.02. 16:15',
    reply: [
      {
        id: 1,
        profile: '익명 1',
        content:
          '가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하',
        date: '2023.02.02. 16:15',
      },
      {
        id: 1,
        profile: '익명 1',
        content:
          '가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하',
        date: '2023.02.02. 16:15',
      },
    ],
  },
];

const Comment = () => {
  return (
    <CommentContainer>
      <Text id='total'>댓글 2</Text>
      {commentExample.map(({ id, profile, content, date, reply }) => (
        <Fragment key={id}>
          <CommentBox>
            <Profile>{profile}</Profile>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <Text>{content}</Text>
              <Text id='date'>{date} | 신고</Text>
            </div>
            <ReplyButton>답글</ReplyButton>
          </CommentBox>
          {reply?.map((rep) => (
            <CommentBox id='reply' key={rep.id}>
              <ReplyArrow />
              <Profile>{rep.profile}</Profile>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                }}>
                <Text>{rep.content}</Text>
                <Text id='date'>{rep.date} | 신고</Text>
              </div>
            </CommentBox>
          ))}
        </Fragment>
      ))}
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  border-top: 2px solid #d9d9d9;
`;

const CommentBox = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 0;
  border-bottom: 1px solid #d9d9d9;
  &#reply {
    position: relative;
    padding-left: 50px;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  &::before {
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    background: url('/img/profile.svg') no-repeat;
    background-size: contain;
  }
`;

const Text = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  &#total {
    width: 95%;
    font-size: 18px;
    font-weight: 500;
    padding: 20px 0;
  }
  &#date {
    font-size: 12px;
    color: #adadad;
  }
`;

const ReplyArrow = styled.div`
  position: absolute;
  background: url('/img/replyArrow.png');
  background-size: contain;
  width: 15px;
  height: 15px;
  left: 20px;
`;

const ReplyButton = styled.button`
  margin-right: auto;
  padding: 5px 10px;
  font-size: 12px;
  border: 1px solid #adadad;
  background: #fff;
  cursor: pointer;
`;
