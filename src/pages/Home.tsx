import styled from '@emotion/styled';

import Flyer from '../components/shared/Flyer';
import { COLORS } from '../constants/colors';
import useCountNumber from '../hooks/useCountNumber';

const Home = () => {
  const count = useCountNumber(77);
  return (
    <div>
      <Section id='first'>
        <Title>
          지금까지
          <br /> 붙여진 전단지 <br />
          <Title id='count'>{count}</Title>개
        </Title>
        <Flyer>asdasd</Flyer>
        <button>전단지골목가기</button>
      </Section>
      <Section id='second'>
        <span>
          지금까지
          <br /> 붙여진 전단지 <span>00</span>개
        </span>
        <Flyer>
          <div>
            나이키 신발
            <br />
            있어요?
          </div>
        </Flyer>
        <button>전단지골목가기</button>
      </Section>
      <Section id='last'>
        <div>
          지금까지 붙여진 전단지 <span>00개</span>
        </div>
        <Flyer>
          <div>
            나이키 신발
            <br />
            있어요?
          </div>
        </Flyer>
        <button>전단지골목가기</button>
      </Section>
    </div>
  );
};

export default Home;

const Section = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  &#first {
    background: url('/img/flyers.png') no-repeat center center;
    background-size: 90%;
    background-color: #f8f8f8;
  }
`;

const Title = styled.span`
  font-family: 'Black Han Sans', sans-serif;
  font-size: 3rem;
  &#count {
    color: ${COLORS.MAIN};
  }
`;
