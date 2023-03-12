import styled from '@emotion/styled';
import { useState } from 'react';

import { Comment } from '../../apis/Comments';
import {
  CommentBox,
  IsMe,
  More,
  MoreContent,
  MoreItem,
  Profile,
  Text,
} from './Comment';

interface ReplyProps {
  rep: Comment;
  handleReport: () => void;
}

const Reply = ({ rep, handleReport }: ReplyProps) => {
  const [replyMoreOn, setReplyMoreOn] = useState(false);

  return (
    <CommentBox id='reply' key={rep.commentId}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <ReplyArrow />
          <Profile>
            {rep.name} {rep.isCommentWriter ? <IsMe>나</IsMe> : undefined}
          </Profile>
          <ContentNDate>
            <Text>{rep.content}</Text>
            <Text id='date'>{rep.createdDate}</Text>
          </ContentNDate>
        </div>

        {/* 답 댓글에 대한 메뉴 */}
        <More
          id='reply'
          onClick={(e) => {
            e.stopPropagation();
            setReplyMoreOn(!replyMoreOn);
          }}>
          {rep.isCommentWriter ? (
            replyMoreOn ? (
              <MoreContent id='mine'>
                <MoreItem id='margin'>수정</MoreItem>
                <MoreItem>삭제</MoreItem>
              </MoreContent>
            ) : undefined
          ) : replyMoreOn ? (
            <MoreContent>
              <MoreItem onClick={handleReport}>신고</MoreItem>
            </MoreContent>
          ) : undefined}
        </More>
      </div>
    </CommentBox>
  );
};

export default Reply;

const ReplyArrow = styled.div`
  position: absolute;
  background: url('/img/replyArrow.png');
  background-size: contain;
  width: 15px;
  height: 15px;
  left: 20px;
  @media all and (max-width: 767px) {
    left: 10px;
  }
`;

const ContentNDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
