import styled from '@emotion/styled';

import Comment from './Comment';

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
        id: 2,
        profile: '익명 1',
        content:
          '가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하',
        date: '2023.02.02. 16:15',
      },
    ],
  },
];

const Comments = () => {
  return (
    <CommentContainer>
      <Text id='total'>댓글 2</Text>
      {commentExample.map(({ id, profile, content, date, reply }) => (
        <Comment
          key={id}
          id={id}
          profile={profile}
          content={content}
          date={date}
          reply={reply}
        />
      ))}
      <ReplyInput placeholder='댓글을 입력해주세요' />
    </CommentContainer>
  );
};

export default Comments;

const ReplyInput = styled.input`
  margin-top: 40px;
  width: 90%;
  height: 50px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  padding: 0 20px;
  box-sizing: border-box;
  background: url('/img/paperPlane.svg') no-repeat;
  background-color: #e9e9e9;
  background-position: 98% 50%;
  background-size: 20px;
`;

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  border-top: 2px solid #d9d9d9;
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
