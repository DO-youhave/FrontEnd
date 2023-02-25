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
        <div>
          <div style={{ fontSize: '42px', fontWeight: '600' }}>전단지 골목</div>
          <div
            style={{ marginTop: '20px', fontWeight: '400', fontSize: '20px' }}>
            내가 찾는 전단지를 모두 모아놓은 골목
          </div>
        </div>

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
  background: #fff;
  margin-top: 30px;
`;

const CategoryNSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0 30px;
`;

const MainContents = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MainContentsInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  width: 75%;
  max-width: 1200px;
`;

const TagsNSort = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 30px;
`;
