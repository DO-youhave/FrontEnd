import styled from '@emotion/styled';

import Category from '../components/Category';
import PopularTags from '../components/PopularTags';
import Search from '../components/Search';

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

      <Category />
    </Container>
  );
};

export default FlyerStreet;

const Container = styled.div``;
const PageTop = styled.div`
  width: 95%;
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
