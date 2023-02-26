import styled from '@emotion/styled';
import { Fragment, useState } from 'react';

interface CommentProps {
  id: number;
  profile: string;
  content: string;
  date: string;
  reply: {
    id: number;
    profile: string;
    content: string;
    date: string;
  }[];
}

const Comment = ({ id, profile, content, date, reply }: CommentProps) => {
  const [comment, setComment] = useState(false);
  const [replyInput, setReplyInput] = useState(''); // 답글 입력
  const handleComment = () => setComment(!comment);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyInput(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(replyInput);
      setReplyInput('');
      setComment(false);
    }
  };
  return (
    <Fragment key={id}>
      <CommentBox>
        <Profile>{profile}</Profile>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Text>{content}</Text>
          <Text id='date'>{date} | 신고</Text>
        </div>
        <ReplyButton onClick={handleComment}>답글</ReplyButton>
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
      {
        // 답글 달기
        comment && (
          <ReplyInput
            placeholder='답글을 입력해주세요'
            value={replyInput}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        )
      }
    </Fragment>
  );
};

export default Comment;

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

const ReplyInput = styled.input`
  margin-top: 20px;
  width: 90%;
  height: 50px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  padding: 0 20px;
  box-sizing: border-box;
  background: url('/img/paper_plane.svg') no-repeat;
  background-color: #e9e9e9;
  background-position: 98% 50%;
  background-size: 20px;
`;
