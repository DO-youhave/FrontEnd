import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Comments from '../components/FlyerDetail/Comments';
import { COLORS } from '../constants/colors';

const tags = ['#운동화', '#나이키', '#맥북'];
const FlyerDetail = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState(false);
  const [openDots, setOpenDots] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };
  const handleDots = () => {
    setOpenDots(!openDots);
  };
  const handleContact = () => {
    setOpenContact(!openContact);
  };

  const handleOpenChat = () => {
    window.open('');
  };
  const handleCopyClipboard = () => {
    const email = 'aaaaa';
    navigator.clipboard.writeText(email);
    alert('이메일 주소가 복사됐어요!');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container onClick={() => setRows(false)}>
      <Flyer>
        <Header>
          <BackButton onClick={handleBack} />

          <Dots onClick={handleDots}>
            {openDots && (
              <div>
                {/* 내가 작성하지 않은 게시물 */}
                <DotsMenu>
                  <DotsMenuItem>북마크하기</DotsMenuItem>
                  <DotsMenuItem id='last'>신고하기</DotsMenuItem>
                </DotsMenu>

                {/* 내가 작성한 게시물 */}
                <DotsMenu id='mine'>
                  <DotsMenuItem>수정</DotsMenuItem>
                  <DotsMenuItem>삭제</DotsMenuItem>
                  <DotsMenuItem id='last'>북마크하기</DotsMenuItem>
                </DotsMenu>
              </div>
            )}
          </Dots>
        </Header>
        <div style={{ fontSize: '36px', fontWeight: '600' }}>
          수학 문제 좀 풀어주세요!
        </div>
        <Category>학습</Category>
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
        <div style={{ position: 'relative' }}>
          <ContactButton id={String(openContact)} onClick={handleContact}>
            글쓴이에게 연락하기
          </ContactButton>
          {openContact && (
            <>
              <ContactMenu id='chat' onClick={handleOpenChat}>
                카카오톡 오픈채팅방 들어가기
              </ContactMenu>
              <ContactMenu id='mail' onClick={handleCopyClipboard}>
                글쓴이 이메일 주소 복사하기
              </ContactMenu>
            </>
          )}
        </div>
        <Comments rows={rows} setRows={setRows} />
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
  padding: 63px;
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
  margin-top: 18px;
  margin-bottom: 18px;
  text-decoration: underline;
  cursor: default;
  font-weight: 600;
  cursor: pointer;
`;

const ViewsNTime = styled.div`
  color: #adadad;
  padding-bottom: 50px;
  margin-bottom: 30px;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  text-align: center;
  font-weight: 400;
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
  margin-bottom: 50px;
`;

const Tags = styled.div`
  width: 90%;
  display: flex;
  gap: 10px;
  margin-bottom: 100px;
`;

const Tag = styled.div`
  padding: 9px 12px;
  border: 1px solid #d9d9d9;
  background-color: #f9f9f9;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  color: #616161;
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
  right: -27px;
  width: 100px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding: 15px 10px;
  &#mine {
    display: none;
  }
`;
const DotsMenuItem = styled.div`
  margin-bottom: 10px;
  color: #616161;
  font-size: 13px;
  &#last {
    margin-bottom: 0;
  }
`;

const ContactButton = styled.button`
  display: block;
  padding: 15px 0px;
  width: 350px;
  background-color: ${COLORS.MAIN};
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  }
  &#true {
    background: url('/img/close.svg') no-repeat;
    background-color: ${COLORS.MAIN};
    background-size: 15px;
    background-position: 95% 50%;
  }
`;

const ContactMenu = styled.div`
  position: absolute;
  padding: 15px 30px;
  width: 350px;
  text-align: left;
  color: ${COLORS.MAIN};
  border-radius: 12px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 10;
  &#chat {
    top: 60px;
    right: 0px;
    background: url('/img/chat.svg') no-repeat;
    background-color: #fff;
    background-size: 15px;
    background-position: 95% 50%;
  }
  &#mail {
    top: 120px;
    right: 0px;
    background: url('/img/mail.svg') no-repeat;
    background-color: #fff;
    background-size: 15px;
    background-position: 95% 50%;
  }
`;
