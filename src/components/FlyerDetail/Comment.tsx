import styled from '@emotion/styled';
import { Fragment, useState } from 'react';

import { Comment as CommentType } from '../../apis/Comments';
import { COLORS } from '../../constants/colors';
import useWriteReply from '../../hooks/useWriteReply';
import { NowTextNum, NumNSubmit, SubmitReplyButton, TextNum } from './Comments';

interface CommentProps {
  postId: number;
  commentId: number;
  name: string;
  content: string;
  createdDate: string;
  childComments: CommentType[];
  isCommentWriter: boolean;
}

const Comment = ({
  postId,
  commentId,
  name,
  content,
  createdDate,
  childComments,
  isCommentWriter,
}: CommentProps) => {
  const [replyOn, setReplyOn] = useState(false); // 답글(child) 입력 창 on, off
  const {
    replyInput,
    handleChange,
    handleReport,
    handleInputLength,
    handleSubmit,
  } = useWriteReply(postId, commentId, setReplyOn);
  const [moreOn, setMoreOn] = useState(false);
  const [replyMoreOn, setReplyMoreOn] = useState(false);

  const handleComment = () => setReplyOn(!replyOn);

  const handleReplyBtn = () => {
    const id = replyOn ? 'on' : undefined;
    return id;
  };

  return (
    <Fragment key={commentId}>
      {/* =====원 댓글===== */}
      <CommentContainer onClick={() => setMoreOn(false)}>
        <CommentBox id='comment'>
          <Profile>{name}</Profile>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Text>{content}</Text>
            <Text id='date'>{createdDate}</Text>
          </div>
          <ReplyButton
            id={handleReplyBtn()}
            onClick={(e) => {
              e.stopPropagation();
              handleComment();
            }}>
            답글
          </ReplyButton>
        </CommentBox>

        {/* 원 댓글에 대한 메뉴 */}
        <More
          onClick={(e) => {
            e.stopPropagation();
            setMoreOn(!moreOn);
          }}>
          {isCommentWriter ? (
            moreOn ? (
              <MoreContent id='mine'>
                <MoreItem id='margin'>수정</MoreItem>
                <MoreItem>삭제</MoreItem>
              </MoreContent>
            ) : undefined
          ) : moreOn ? (
            <MoreContent>
              <MoreItem onClick={handleReport}>신고</MoreItem>
            </MoreContent>
          ) : undefined}
        </More>
      </CommentContainer>

      {
        // 답글 달기 입력창
        replyOn && (
          <ReplyInputWrap>
            <ReplyInput
              placeholder='답글을 입력해주세요'
              value={replyInput}
              maxLength={300}
              rows={7}
              onChange={handleChange}
            />
            <NumNSubmit>
              <TextNum>
                <NowTextNum>{replyInput.length}</NowTextNum>/300
              </TextNum>
              <SubmitReplyButton
                disabled={handleInputLength()}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSubmit();
                }}>
                등록
              </SubmitReplyButton>
            </NumNSubmit>
          </ReplyInputWrap>
        )
      }

      {/* =====답 댓글===== */}
      {childComments?.map((rep) => (
        <CommentBox id='reply' key={rep.commentId}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <ReplyArrow />
              <Profile>{rep.name}</Profile>
              <ContentNDate>
                <Text>{rep.content}</Text>
                <Text id='date'>{rep.createdDate}</Text>
              </ContentNDate>
            </div>

            <More id='reply' onClick={() => setReplyMoreOn(!replyMoreOn)}>
              {isCommentWriter ? (
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
      ))}
    </Fragment>
  );
};

export default Comment;

const CommentContainer = styled.div`
  width: 95%;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CommentBox = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  &#reply {
    position: relative;
    padding-left: 50px;
    border-bottom: 1px solid #d9d9d9;
  }
  &#comment {
    width: 60%;
  }
  @media all and (max-width: 767px) {
    &#comment {
      width: 100%;
    }
    &#reply {
      padding-left: 40px;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  &::before {
    content: '';
    display: inline-block;
    width: 27px;
    height: 27px;
    margin-right: 10px;
    background: url('/img/profile.svg') no-repeat;
    background-size: contain;
  }
`;

const ContentNDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  @media all and (max-width: 767px) {
    left: 10px;
  }
`;

const ReplyButton = styled.button`
  margin-right: auto;
  margin-top: 20px;
  padding: 7px 15px;
  font-size: 12px;
  border: 1px solid #d9d9d9;
  background: #fff;
  cursor: pointer;
  color: #616161;
  &#on {
    background: ${COLORS.MAIN};
    color: #fff;
    border: 1px solid ${COLORS.MAIN};
    box-shadow: 0 0 15px rgba(4, 150, 105, 0.5);
  }
`;

const MoreItem = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #616161;
  &#margin {
    margin-bottom: 10px;
  }
`;

const More = styled.div`
  width: 12px;
  height: 20px;
  margin-top: 43px;
  background: url('/img/dots.svg') no-repeat center center;
  background-size: contain;
  position: relative;
  cursor: pointer;
  &#reply {
    margin-top: 3px;
  }
  @media all and (max-width: 767px) {
    margin-top: 35px;
  }
`;

const MoreContent = styled.div`
  position: absolute;
  left: -25px;
  bottom: -55px;
  border: 1px solid #d9d9d9;
  padding: 12px 20px;
  width: max-content;
  text-align: center;
  background: #fff;
  font-size: 12px;
  display: block;
  cursor: pointer;
  &#mine {
    bottom: -80px;
    display: none;
  }
  @media all and (max-width: 767px) {
    left: -56px;
    bottom: -40px;
    padding: 8px 20px;
    &#mine {
      bottom: -65px;
    }
  }
`;
const ReplyInputWrap = styled.div`
  width: 95%;
  background-color: #e9e9e9;
  border-radius: 0 0 12px 12px;
`;

const ReplyInput = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  padding: 20px;
  box-sizing: border-box;
  background-color: #e9e9e9;
`;
