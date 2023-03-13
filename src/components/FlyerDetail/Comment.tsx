import styled from '@emotion/styled';
import { Fragment, useState } from 'react';

import { COLORS } from '../../constants/colors';
import useEditComment from '../../hooks/useEditComment';
import useRemoveComment from '../../hooks/useRemoveComment';
import useWriteReply from '../../hooks/useWriteReply';
import { CommentProps } from '../../interfaces/comment';
import { NowTextNum, NumNSubmit, SubmitReplyButton, TextNum } from './Comments';
import Reply from './Reply';

const Comment = ({
  postId,
  commentId,
  name,
  content,
  createdDate,
  childComments,
  isCommentWriter,
  isRemoved,
}: CommentProps) => {
  const [replyOn, setReplyOn] = useState(false); // 답글(child) 입력 창 on, off
  const [onEdit, setOnEdit] = useState(false); // 댓글(parent) 수정 창 on,off
  const [saveComment, setSaveComment] = useState<string>(content);
  const {
    replyInput,
    handleChange,
    handleReport,
    handleInputLength,
    handleSubmit,
  } = useWriteReply(postId, commentId, setReplyOn);

  const { completeEdit } = useEditComment(
    postId,
    commentId,
    saveComment,
    setOnEdit
  );

  const { isRemove } = useRemoveComment(postId, commentId);

  const [moreOn, setMoreOn] = useState(false);

  const handleComment = () => setReplyOn(!replyOn);

  const handleReplyBtn = () => {
    const id = replyOn ? 'on' : undefined;
    return id;
  };

  const handleEditInput = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setSaveComment(e.target.value);

  const handleEditinputNum = () => {
    return saveComment.length === 0 || saveComment.length > 300 ? true : false;
  };

  return (
    <Fragment key={commentId}>
      {/* =====원 댓글===== */}
      <CommentContainer onClick={() => setMoreOn(false)}>
        <CommentBox id='comment'>
          <Profile>
            {name} {isCommentWriter ? <IsMe>나</IsMe> : undefined}
          </Profile>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {onEdit ? ( // 수정 버튼 클릭 시 댓글 편집 창
              <EditInputWrap>
                <EditTextArea
                  value={saveComment}
                  rows={7}
                  maxLength={301}
                  onChange={handleEditInput}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}>
                  <TextNum>
                    <NowTextNum>{saveComment.length}</NowTextNum>/300
                  </TextNum>
                  <CancelEdit onClick={() => setOnEdit(false)}>취소</CancelEdit>
                  <SubmitEdit
                    disabled={handleEditinputNum()}
                    onClick={completeEdit}>
                    수정
                  </SubmitEdit>
                </div>
              </EditInputWrap>
            ) : (
              <Text>{content}</Text>
            )}
            {!onEdit ? (
              !isRemoved ? (
                <Text id='date'>{createdDate}</Text>
              ) : undefined
            ) : undefined}
          </div>
          {!isRemoved ? (
            <ReplyButton
              id={handleReplyBtn()}
              onClick={(e) => {
                e.stopPropagation();
                handleComment();
              }}>
              답글
            </ReplyButton>
          ) : undefined}
        </CommentBox>

        {/* 원 댓글에 대한 메뉴 */}
        {!isRemoved ? (
          <More
            onClick={(e) => {
              e.stopPropagation();
              setMoreOn(!moreOn);
            }}>
            {isCommentWriter ? (
              moreOn ? (
                <MoreContent id='mine'>
                  <MoreItem
                    id='margin'
                    onClick={() => {
                      setOnEdit(true);
                    }}>
                    수정
                  </MoreItem>
                  <MoreItem onClick={isRemove}>삭제</MoreItem>
                </MoreContent>
              ) : undefined
            ) : moreOn ? (
              <MoreContent>
                <MoreItem onClick={handleReport}>신고</MoreItem>
              </MoreContent>
            ) : undefined}
          </More>
        ) : undefined}
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
        <Reply
          key={rep.commentId}
          postId={postId}
          rep={rep}
          handleReport={handleReport}
        />
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

export const CommentBox = styled.div`
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
    width: 100%;
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

export const Profile = styled.div`
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

export const IsMe = styled.span`
  display: inline-block;
  margin-left: 12px;
  border-radius: 100%;
  width: 18px;
  height: 18px;
  font-size: 10px;
  text-align: center;
  line-height: 18px;
  background: ${COLORS.MAIN};
  color: #fff;
`;

export const EditInputWrap = styled.div`
  width: 100%;
  font-size: 14px;
  margin: 10px 0;
  padding: 18px;
  border-radius: 15px;
  background: #e9e9e9;
  box-sizing: border-box;
`;

export const EditTextArea = styled.textarea`
  width: 100%;
  border: none;
  background: #e9e9e9;
  outline: none;
`;

export const SubmitEdit = styled.button`
  padding: 10px 30px;
  border: none;
  background: ${COLORS.MAIN};
  color: #fff;
  cursor: pointer;

  &:disabled {
    background: #cdcdcd;
  }
`;

export const CancelEdit = styled.button`
  padding: 10px 30px;
  border: 1px solid ${COLORS.MAIN};
  color: ${COLORS.MAIN};
  cursor: pointer;
  margin-right: 10px;
`;

export const Text = styled.div`
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

export const ReplyButton = styled.button`
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

export const MoreItem = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #616161;
  &#margin {
    margin-bottom: 10px;
  }
`;

export const More = styled.div`
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

export const MoreContent = styled.div`
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
export const ReplyInputWrap = styled.div`
  width: 95%;
  background-color: #e9e9e9;
  border-radius: 0 0 12px 12px;
`;

export const ReplyInput = styled.textarea`
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
