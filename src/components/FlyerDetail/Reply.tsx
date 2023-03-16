import styled from '@emotion/styled';
import { useState } from 'react';

import { Comment, ReportReply } from '../../apis/Comments';
import useEditReply from '../../hooks/useEditReply';
import useRemoveReply from '../../hooks/useRemoveReply';
import {
  CancelEdit,
  CommentBox,
  EditInputWrap,
  EditTextArea,
  IsMe,
  More,
  MoreContent,
  MoreItem,
  Profile,
  SubmitEdit,
  Text,
} from './Comment';
import { NowTextNum, TextNum } from './Comments';

interface ReplyProps {
  postId: number;
  rep: Comment;
}

const Reply = ({ postId, rep }: ReplyProps) => {
  const [replyMoreOn, setReplyMoreOn] = useState(false);
  const [onEdit, setOnEdit] = useState<boolean>(false);

  const [saveReply, setSaveReply] = useState<string>(rep.content);

  const { isRemove } = useRemoveReply(postId, rep.commentId);

  const handleEditInput = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setSaveReply(e.target.value);

  const handleEditinputNum = () => {
    return saveReply.length === 0 || saveReply.length > 300 ? true : false;
  };

  const { completeEdit } = useEditReply(
    postId,
    rep.commentId,
    saveReply,
    setOnEdit
  );

  const submitReportReply = async () => {
    try {
      if (confirm('이 댓글을 신고하시겠어요?')) {
        await ReportReply(rep.commentId);
        alert('신고되었습니다! 깨끗한 사이트를 위한 협조 감사합니다 😄');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CommentBox id='reply' key={rep.commentId}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%' }}>
          <ReplyArrow />
          <Profile>
            {rep.name} {rep.isCommentWriter ? <IsMe>나</IsMe> : undefined}
          </Profile>
          <ContentNDate>
            {onEdit ? (
              <EditInputWrap>
                <EditTextArea
                  value={saveReply}
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
                    <NowTextNum>{saveReply.length}</NowTextNum>/300
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
              <Text>{rep.content}</Text>
            )}
            {!onEdit ? (
              !rep.isRemoved ? (
                <Text id='date'>{rep.createdDate}</Text>
              ) : undefined
            ) : undefined}
          </ContentNDate>
        </div>

        {/* 답 댓글에 대한 메뉴 */}
        {!rep.isRemoved ? (
          <More
            id='reply'
            onClick={(e) => {
              e.stopPropagation();
              setReplyMoreOn(!replyMoreOn);
            }}>
            {rep.isCommentWriter ? (
              replyMoreOn ? (
                <MoreContent id='mine'>
                  <MoreItem id='margin' onClick={() => setOnEdit(true)}>
                    수정
                  </MoreItem>
                  <MoreItem onClick={isRemove}>삭제</MoreItem>
                </MoreContent>
              ) : undefined
            ) : replyMoreOn ? (
              <MoreContent>
                <MoreItem onClick={submitReportReply}>신고</MoreItem>
              </MoreContent>
            ) : undefined}
          </More>
        ) : undefined}
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
