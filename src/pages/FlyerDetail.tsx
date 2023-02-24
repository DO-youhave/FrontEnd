import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Comment from '../components/FlyerDetail/Comment';
import { COLORS } from '../constants/colors';

const tags = ['#운동화', '#나이키', '#맥북'];
const FlyerDetail = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleBack = () => {
    navigate(-1);
  };
  const handleDots = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Flyer>
        <Header>
          <BackButton onClick={handleBack} />
          <h1>수학 문제 좀 풀어주세요!</h1>
          <Dots onClick={handleDots}>
            {open && (
              <DotsMenu>
                <div>수정</div>
                <div>삭제</div>
              </DotsMenu>
            )}
          </Dots>
        </Header>
        <Category>이 [문제] 풀어줄 사람 있어요?</Category>
        <ViewsNTime>
          조회수 10 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 1시간 전
        </ViewsNTime>
        <Imgs />
        <Content>
          가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하가ㅏ다라마바사아자차카타파하
        </Content>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <ContactButton>글쓴이에게 연락하기</ContactButton>
        <Comment />
      </Flyer>
    </Container>
  );
};

export default FlyerDetail;

const Container = styled.div`
  background: url('/img/wall.png');
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
  margin: 50px 0px;
  padding: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Category = styled.div`
  color: #adadad;
  margin-bottom: 25px;
  text-decoration: underline;
  cursor: default;
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
  margin-bottom: 100px;
`;

const Tag = styled.div`
  padding: 9px 12px;
  border: 1px solid #d9d9d9;
  background-color: #f9f9f9;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
`;

const BackButton = styled.div`
  background: url('/img/back.png') no-repeat;
  background-size: contain;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const Dots = styled.div`
  position: relative;
  background: url('/img/dots.svg') no-repeat;
  background-size: contain;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const DotsMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;
  width: 60px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 10px;
`;

const ContactButton = styled.button`
  padding: 15px 100px;
  background-color: ${COLORS.MAIN};
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 400;
  cursor: pointer;
`;
