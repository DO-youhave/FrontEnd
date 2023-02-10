import styled from '@emotion/styled';

import Category from '../components/Street/Category';
import PopularTags from '../components/Street/PopularTags';
import Search from '../components/Street/Search';
import Sort from '../components/Street/Sort';

const FlyerStreet = () => {
  return (
    <Container>
      <PageTop>
        <PageTopPicture>그림 삽입 공간</PageTopPicture>
        <TagsNSearch>
          <PopularTags />
          <Search />
        </TagsNSearch>
      </PageTop>

      <MainContents>
        <Sort />
        <Category />
      </MainContents>
    </Container>
  );
};

export default FlyerStreet;

const Container = styled.div``;
const PageTop = styled.div`
  width: 85%;
  height: 520px;
  margin: 0 auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PageTopPicture = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid blue;
`;
const TagsNSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

const MainContents = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  margin-top: 50px;
  padding: 3% 7.5%;
  display: flex;
  flex-direction: column;
`;
