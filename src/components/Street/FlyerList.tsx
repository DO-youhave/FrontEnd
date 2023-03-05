import styled from '@emotion/styled';

import useGetFlyerList from '../../hooks/useGetFlyerList';
import Flyer from './Flyer';

const FlyerList = () => {
  const { data, isLoading, ref } = useGetFlyerList();
  const flyers = data?.pages;

  if (isLoading) return <div>로딩중</div>;
  return (
    <Container>
      {flyers?.map(({ data: flyer }) =>
        flyer.map(({ postId, title, tags, imgUrl }) => (
          <Flyer
            key={postId}
            postId={postId}
            title={title}
            tags={tags}
            imgUrl={imgUrl}
          />
        ))
      )}
      <div ref={ref} />
    </Container>
  );
};

export default FlyerList;

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 65px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0px 20px;
  }
`;
