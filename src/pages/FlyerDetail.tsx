import styled from '@emotion/styled';

import Comments from '../components/FlyerDetail/Comments';
import { CategoryItem } from '../constants/categorys';
import { COLORS } from '../constants/colors';
import useGetFlyerDetail from '../hooks/useGetFlyerDetail';
import { timeForToday } from '../utils/timeForToday';

const FlyerDetail = () => {
  const {
    rows,
    setRows,
    rowsBottom,
    setRowsBottom,
    openDots,
    openContact,
    handleBack,
    handleDots,
    handleContact,
    handleOpenChat,
    handleCopyClipboard,
    info,
  } = useGetFlyerDetail();

  console.log(info);
  const handleCategory = CategoryItem.find(
    (item) => item.id === info?.categoryKeyword
  )?.name;
  const handleImgWidth = info?.imgSecond ? 'half' : '';
  return (
    <Container
      onClick={() => {
        setRows(false);
        setRowsBottom(false);
      }}>
      <Flyer>
        <Header>
          <BackButton onClick={handleBack} />

          <Dots onClick={handleDots}>
            {openDots && (
              <div>
                {info?.isWriter ? (
                  <DotsMenu id='mine'>
                    <DotsMenuItem>수정</DotsMenuItem>
                    <DotsMenuItem>삭제</DotsMenuItem>
                    <DotsMenuItem id='last'>북마크하기</DotsMenuItem>
                  </DotsMenu>
                ) : (
                  <DotsMenu>
                    <DotsMenuItem>북마크하기</DotsMenuItem>
                    <DotsMenuItem id='last'>신고하기</DotsMenuItem>
                  </DotsMenu>
                )}
              </div>
            )}
          </Dots>
        </Header>

        <Title>{info?.title}</Title>
        <Category>{handleCategory}</Category>
        <ViewsNTime>
          조회수 {info?.viewCount} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{' '}
          {timeForToday(info?.createdDate || '')}
        </ViewsNTime>

        {info?.img ? (
          <Imgs>
            {info?.img && <Img id={handleImgWidth} src={info?.img} />}
            {info?.imgSecond && (
              <Img
                id={handleImgWidth}
                className='second'
                src={info?.imgSecond}
              />
            )}
          </Imgs>
        ) : undefined}

        <Content>{info?.content}</Content>
        <Tags>
          {info?.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>

        {info?.contactWay !== 'comment' && (
          <ContactWrap>
            <ContactButton id={String(openContact)} onClick={handleContact}>
              글쓴이에게 연락하기
            </ContactButton>
            {openContact && (
              <ContactsParent>
                {info?.contactWay.includes('chatting') && (
                  <ContactMenu id='chat' onClick={handleOpenChat}>
                    카카오톡 오픈채팅방 들어가기
                  </ContactMenu>
                )}
                {info?.contactWay.includes('email') && (
                  <ContactMenu id='mail' onClick={handleCopyClipboard}>
                    글쓴이 이메일 주소 복사하기
                  </ContactMenu>
                )}
              </ContactsParent>
            )}
          </ContactWrap>
        )}
        <Comments
          rows={rows}
          setRows={setRows}
          rowsBottom={rowsBottom}
          setRowsBottom={setRowsBottom}
        />
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
  @media all and (max-width: 1024px) {
    width: 90%;
  }
  @media all and (max-width: 767px) {
    width: 100%;
    box-shadow: none;
    margin: 0;
    background: url(/img/flyerBg.png) no-repeat center center;
    background-size: cover;
    padding: 5%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 25px;
  @media all and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  @media all and (max-width: 767px) {
    font-size: 26px;
  }
`;

const Category = styled.div`
  color: #adadad;
  margin-top: 18px;
  margin-bottom: 18px;
  text-decoration: underline;
  cursor: default;
  font-weight: 600;
  cursor: pointer;
  @media all and (max-width: 767px) {
    font-weight: 500;
  }
`;

const ViewsNTime = styled.div`
  color: #adadad;
  padding-bottom: 50px;
  margin-bottom: 30px;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  text-align: center;
  font-weight: 400;
  @media all and (max-width: 767px) {
    padding-bottom: 20px;
    border-bottom: none;
  }
`;

const Imgs = styled.div`
  width: 90%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px;
  @media all and (max-width: 767px) {
    width: 100%;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &#half {
    width: 49%;
  }
  &.second {
    border-left: 1px solid #d9d9d9;
  }
`;

const Content = styled.div`
  width: 90%;
  margin: 20px 0;
  line-height: 1.5;
  font-weight: 400;
  @media all and (max-width: 767px) {
    width: 100%;
  }
`;

const Tags = styled.div`
  width: 90%;
  display: flex;
  gap: 10px;
  margin-top: 50px;
  margin-bottom: 70px;
  @media all and (max-width: 767px) {
    width: 100%;
  }
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
  background: url('/img/detailBack.png') no-repeat;
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
  padding: 12px 10px;
  @media all and (max-width: 767px) {
    right: 20px;
    top: 35px;
  }
`;
const DotsMenuItem = styled.div`
  margin-bottom: 10px;
  color: #616161;
  font-size: 12px;
  &#last {
    margin-bottom: 0;
  }
`;
const ContactWrap = styled.div`
  position: relative;
  @media all and (max-width: 767px) {
    width: 100%;
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
  margin: 20px 0;
  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  }
  &#true {
    background: url('/img/close.svg') no-repeat;
    background-color: ${COLORS.MAIN};
    background-size: 15px;
    background-position: 95% 50%;
  }
  @media all and (max-width: 767px) {
    width: 100%;
    padding: 18px 0;
  }
`;

const ContactsParent = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  z-index: 10;
`;

const ContactMenu = styled.div`
  padding: 15px 30px;
  width: 100%;
  text-align: left;
  color: ${COLORS.MAIN};
  border-radius: 12px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 10;
  &#chat {
    background: url('/img/chat.svg') no-repeat;
    background-color: #fff;
    background-size: 15px;
    background-position: 95% 50%;
    margin-bottom: 10px;
  }
  &#mail {
    background: url('/img/mail.svg') no-repeat;
    background-color: #fff;
    background-size: 15px;
    background-position: 95% 50%;
  }
  @media all and (max-width: 767px) {
    width: 100%;
    left: 0%;
    &#chat {
      top: 63px;
    }
  }
`;
