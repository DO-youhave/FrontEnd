import styled from '@emotion/styled';

import Category from '../components/Street/Category';
import FlyerList from '../components/Street/FlyerList';
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
        <CategoryNList>
          <Sort />
          <FlyerList />
          <Category />
        </CategoryNList>
      </MainContents>
    </Container>
  );
};

export default FlyerStreet;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PageTop = styled.div`
  width: 75%;
  max-width: 1200px;
  height: 520px;

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
  align-items: center;
  margin-top: auto;
`;

const MainContents = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CategoryNList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  width: 75%;
  max-width: 1200px;
`;
