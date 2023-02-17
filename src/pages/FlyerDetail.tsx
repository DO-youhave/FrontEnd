import styled from '@emotion/styled';

const tags = ['#운동화', '#나이키', '#맥북'];
const FlyerDetail = () => {
  return (
    <Container>
      <Flyer>
        <Header>
          <div>{'<'}</div>
          <div>수학 문제 좀 풀어주세요!</div>
          <img src='/img/dots.svg' alt='dots' />
        </Header>
        <Category>이 [문제] 풀어줄 사람 있어요?</Category>
        <ViewsNTime>조회수 10 | 1시간 전</ViewsNTime>
        <Imgs />
        <Content>
          가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하
        </Content>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </Flyer>
    </Container>
  );
};

export default FlyerDetail;

const Container = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const Flyer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 100px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Category = styled.div`
  color: #adadad;
  margin-bottom: 25px;
`;

const ViewsNTime = styled.div`
  color: #adadad;
  padding-bottom: 50px;
  margin-bottom: 30px;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  text-align: center;
`;

const Imgs = styled.div`
  width: 90%;
  height: 300px;
  background-color: rgba(4, 150, 105, 0.2);
`;

const Content = styled.div`
  width: 90%;
  margin-top: 50px;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const Tags = styled.div`
  width: 90%;
  display: flex;
  gap: 10px;
  margin-right: auto;
`;

const Tag = styled.div`
  padding: 9px 12px;
  border: 1px solid #d9d9d9;
  background-color: #f9f9f9;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
`;
