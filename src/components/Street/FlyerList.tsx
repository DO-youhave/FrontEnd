import styled from '@emotion/styled';

// import useGetFlyerList from '../../hooks/useGetFlyerList';
// import Loading from '../shared/Loading';
import Flyer from './Flyer';

const FlyerList = () => {
  // const { data, isLoading, ref } = useGetFlyerList();
  // const flyers = data?.pages;
  // const hasResult = flyers?.find((data) => data.data)?.data; // 해당 전단지가 있는지 여부

  // if (isLoading) return <Loading>전단지를 가져오는 중입니다</Loading>;
  return (
    <div>
      <FlyerContainer>
        {/* {flyers?.map(({ data: flyer }) =>
          flyer.map(({ postId, title, tags, imgUrl }) => (
            <Flyer
              key={postId}
              postId={postId}
              title={title}
              tags={tags}
              imgUrl={imgUrl}
            />
          ))
        )} */}
        <Flyer
          postId={1}
          title='이 영화제목 아는 사람 있어요?'
          tags={['영화 제목', '강아지', '김향기']}
          imgUrl='https://movie-img.yes24.com/NYes24/MOVIE/maumee04.jpg'
        />
        <Flyer
          postId={2}
          title='이 문제 해결 방법 아는 사람 있어요?'
          tags={['기하와 벡터', '수학', '고등학교']}
          imgUrl='https://s3.orbi.kr/data/file/united2/e085ccc4-6148-4e03-ba84-49ccc939e6a61.PNG'
        />
        <Flyer
          postId={3}
          title='에어팟 가위바위보 단판 승부 하실 분 구합니다! (제가 본체)'
          tags={['에어팟', '가위바위보', '게임']}
          imgUrl='https://ccimg.hellomarket.com/images/2021/item/07/07/02/0314479_4979935_1.jpg?size=s6'
        />
        <Flyer
          postId={4}
          title='이삿짐 옮겨주실 분 구합니다 (시급 1만원)'
          tags={['이삿짐', '옮기기', '도와주세요']}
          imgUrl='https://img2.quasarzone.com/editor/2020/12/18/a0c32ba62eca0fbc916aeafe27bcf650.png'
        />
        <Flyer
          postId={5}
          title='먹태깡 8봉지 일괄 3만원에 팝니다!'
          tags={['먹태깡', '팝니다', '8천원']}
          imgUrl='https://media.bunjang.co.kr/product/236243971_%7Bcnt%7D_1694597726_w%7Bres%7D.jpg'
        />
        <Flyer
          postId={6}
          title='근성장에 좋은 음식 추천해주세요! (종류 상관없음)'
          tags={['근성장', '단백질', '아르기닌']}
          imgUrl='https://img.danawa.com/prod_img/500000/150/986/img/12986150_1.jpg?_v=20221223103438'
        />
        {/* <div ref={ref} /> */}
      </FlyerContainer>
      {/* {hasResult?.length === 0 && (
        <NoneFlyer>해당하는 전단지가 없습니다 😭</NoneFlyer>
      )} */}
    </div>
  );
};

export default FlyerList;

const FlyerContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 65px;
  margin-top: 60px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

// const NoneFlyer = styled.div`
//   width: 100%;
//   height: 30vh;
//   text-align: center;
//   padding-top: 50px;
//   font-size: 20px;
//   font-weight: 400;
// `;
