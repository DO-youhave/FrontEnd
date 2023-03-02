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

const Recent = () => {
  return (
    <GridBox>
      {recentExample.map(({ id, content, createdAt }) => (
        <AlertBox key={id}>
          <BoxTape src='/img/tape.svg' alt='tape' />
          <Title>
            회원님의 전단지에
            <br /> 새로운 댓글이 달렸어요.
          </Title>
          <Content>{`"${content}"`}</Content>
          <Date>{createdAt}</Date>
        </AlertBox>
      ))}
    </GridBox>
  );
};

export default Recent;

const GridBox = styled.div`
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

const AlertBox = styled.div`
  height: 220px;
  padding: 30px 10px;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: url('/img/flyerBg.png') no-repeat center center;
  background-size: cover;
  transition: box-shadow 0.1s ease;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  &:hover {
    box-shadow: 0px 0px 0px;
  }
  @media screen and (max-width: 576px) {
    background: #fff;
    
`;

const BoxTape = styled.img`
  position: absolute;
  width: 35%;
  top: -12px;
  left: 50%;
  transform: translate(-50%, 0%);
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
