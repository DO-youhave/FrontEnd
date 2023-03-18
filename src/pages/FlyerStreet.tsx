import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Category from '../components/Street/Category';
import FlyerList from '../components/Street/FlyerList';
import MobileSearch from '../components/Street/MobileSearch';
import PopularTags from '../components/Street/PopularTags';
import Search from '../components/Street/Search';
import Sort from '../components/Street/Sort';
import { COLORS } from '../constants/colors';
import { ROUTES } from '../constants/routes';

const FlyerStreet = () => {
  const navigate = useNavigate();
  const goWrite = () => navigate(ROUTES.POSTING);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <PageTop>
        <Header>
          <Title>전단지 골목</Title>
          <SubTitle>내가 찾는 전단지를 모두 모아놓은 골목</SubTitle>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Category id='mobile' />
            <Sort id='mobile' />
          </div>
        </Header>

        <MobileSearch />

        <CategoryNSearch>
          <Category />
          <Search />
        </CategoryNSearch>
      </PageTop>

      <MainContents>
        <MainContentsInner>
          <TagsNSort>
            <PopularTags />
            <Sort />
          </TagsNSort>

          <FlyerList />
        </MainContentsInner>
      </MainContents>
      <WriteBtnWrap>
        <WriteButton src='/img/writeBtn.svg' onClick={goWrite} />
        <Balloon>전단지 쓰기</Balloon>
      </WriteBtnWrap>
    </Container>
  );
};

export default FlyerStreet;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    background-color: #f5f6f8;
  }
`;

const PageTop = styled.div`
  width: 75%;
  max-width: 1200px;
  background: #fff;
  margin-top: 30px;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    background: #f5f6f8;
  }
`;

const CategoryNSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 70px 0 40px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MainContents = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    background-color: #f5f6f8;
  }
`;

const MainContentsInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  width: 75%;
  max-width: 1200px;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const TagsNSort = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px 0 30px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f6f8;
  }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 576px) {
    font-size: 24px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Balloon = styled.div`
  position: absolute;
  width: 86px;
  height: 40px;
  background: ${COLORS.MAIN};
  top: -42px;
  left: calc(50% - 43px);
  border-radius: 10px;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  line-height: 40px;
  box-shadow: 0 0 15px 10px rgba(4, 150, 105, 0.1);
  transition: opacity 0.2s;

  opacity: 0;
  &::after {
    border-top: 10px solid ${COLORS.MAIN};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    bottom: -8px;
    left: calc(50% - 9px);
  }
`;

const WriteBtnWrap = styled.div`
  position: fixed;
  bottom: 20px;
  right: 3%;
  &:hover ${Balloon} {
    opacity: 1;
  }
`;

const WriteButton = styled.img`
  width: 100px;
  cursor: pointer;
`;
