import styled from '@emotion/styled';
import { Fragment, useContext, useState } from 'react';

import { resign } from '../../apis/Auth';
import { COLORS } from '../../constants/colors';
import { profileContext } from '../../pages/MyInfo';
import { Button, Container } from './Logout';

const exitReason = [
  { id: 1, content: '이용을 잘 안해서', emoji: '🥱' },
  { id: 2, content: '다른 더 좋은 사이트가 있어서', emoji: '💻' },
  { id: 3, content: '사용하기 불편해서', emoji: '😵' },
  { id: 4, content: '기타 사유', emoji: '✏' },
];

const Exit = () => {
  const [exit, setExit] = useState<boolean>(false);
  const [reason, setReason] = useState<string>();
  const [etc, setEtc] = useState<string>('');
  const profile = useContext(profileContext);
  const handleClick = async () => {
    if (!exit) return setExit(true);
    if (!reason) return alert('탈퇴 사유를 선택해주세요!');
    const { success } = await resign({
      reason: reason === '기타 사유' ? etc : reason,
    });
    if (success) {
      alert('탈퇴가 완료되었습니다.');
      window.location.href = '/';
    } else {
      alert('탈퇴에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Container id='exit'>
      <Text>
        {!exit
          ? `${profile?.nickname}님, 정말로 ‘있어요?’ 를 떠나시는 건가요 😥`
          : '탈퇴 사유를 한 가지만 알려주세요!'}
      </Text>
      {exit && (
        <ReasonList>
          {exitReason.map(({ id, content, emoji }) =>
            reason === '기타 사유' && id === 4 ? (
              <EtcInput
                key={id}
                onChange={(e) => setEtc(e.target.value)}
                autoFocus
              />
            ) : (
              <Fragment key={id}>
                <Input
                  id={String(id)}
                  type='radio'
                  name='exit'
                  value={content}
                  onClick={(e) => setReason(e.currentTarget.value)}
                />
                <Label htmlFor={String(id)}>
                  <span>{content}</span>
                  <span>{emoji}</span>
                </Label>
              </Fragment>
            )
          )}
        </ReasonList>
      )}
      <Button onClick={handleClick}>{!exit ? '회원' : ''}탈퇴하기</Button>
    </Container>
  );
};

export default Exit;

const Text = styled.div`
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  width: 400px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ReasonList = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 20px;
  gap: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 15px;
  font-weight: 400;
  box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
  &:checked + ${Label} {
    background-color: ${COLORS.MAIN};
    color: #fff;
  }
`;

const EtcInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 20px;
  border-radius: 15px;
  font-weight: 400;
  box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.1);
  outline: none;
  border: 2px solid ${COLORS.MAIN};
  background: url('/img/pen.svg') no-repeat 95% 50%;
  background-size: 18px;
`;
