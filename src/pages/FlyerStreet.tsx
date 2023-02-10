import styled from '@emotion/styled';

import Category from '../components/Category';
import PopularTags from '../components/PopularTags';
import Search from '../components/Search';

const FlyerStreet = () => {
  return (
    <Container>
      <TagsNSearch>
        <PopularTags />
        <Search />
      </TagsNSearch>
      <Category />
    </Container>
  );
};

export default FlyerStreet;

const Container = styled.div``;

const TagsNSearch = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 75px;
`;
