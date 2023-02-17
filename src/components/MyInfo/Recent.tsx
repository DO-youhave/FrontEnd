import styled from '@emotion/styled';

const recentExample = [
  {
    id: 1,
    content: '댓글 내용용 죽겠지 푸하하 ㅋㅋㅎㅎㅋㅋㅎㅎ',
    createdAt: '2023-01-01',
  },
  {
    id: 2,
    content: '댓글 내용용 죽겠지 푸하하 ㅋㅋㅎㅎㅋㅋㅎㅎ',
    createdAt: '2023-01-01',
  },
  {
    id: 3,
    content: '댓글 내용용 죽겠지 푸하하 ㅋㅋㅎㅎㅋㅋㅎㅎ',
    createdAt: '2023-01-01',
  },
  {
    id: 4,
    content: '댓글 내용용 죽겠지 푸하하 ㅋㅋㅎㅎㅋㅋㅎㅎ',
    createdAt: '2023-01-01',
  },
  {
    id: 5,
    content: '댓글 내용용 죽겠지 푸하하 ㅋㅋㅎㅎㅋㅋㅎㅎ',
    createdAt: '2023-01-01',
  },
  {
    id: 6,
    content: '댓글 내용용 죽겠지 푸하하 ㅋㅋㅎㅎㅋㅋㅎㅎ',
    createdAt: '2023-01-01',
  },
  {
    id: 7,
    content: '댓글 내용용 죽겠지 푸하하 ㅋㅋㅎㅎㅋㅋㅎㅎ',
    createdAt: '2023-01-01',
  },
  {
    id: 8,
    content: '댓글 내용용 죽겠지 푸하하 ㅋㅋㅎㅎㅋㅋㅎㅎ',
    createdAt: '2023-01-01',
  },
];
const alertTitle = '누군가가 회원님의 전단지에 댓글을 달았습니다.';
const Recent = () => {
  return (
    <Container>
      {recentExample.map(({ id, content, createdAt }) => (
        <AlertBox key={id}>
          <BoxTape src='/img/tape.svg' alt='tape' />
          <Title>{alertTitle}</Title>
          <Content>{`"${content}"`}</Content>
          <Date>{createdAt}</Date>
        </AlertBox>
      ))}
    </Container>
  );
};

export default Recent;

const Container = styled.div`
  height: 100%;
  width: 75%;
  background-color: #f5f6f8;
  border-radius: 8px;
  padding: 55px 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px 30px;
`;

const AlertBox = styled.div`
  height: 220px;
  padding: 20px 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: url('/img/flyerBg.png') no-repeat center center;
  background-size: cover;
  transition: box-shadow 0.1s ease;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0px 0px 0px;
  }
`;

const BoxTape = styled.img`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Content = styled.div`
  font-size: 14px;
  font-weight: 400;
  height: 80px;
  color: #a3a3a3;
  line-height: 1.3;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: right;
  margin-top: auto;
`;
