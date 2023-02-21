import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { COLORS } from '../../constants/colors';
import { ROUTES } from '../../constants/routes';
import useCountNumber from '../../hooks/useCountNumber';
import Flyer from '../shared/Flyer';

const MainSection = () => {
  const navigate = useNavigate();
  const goStreet = () => navigate(ROUTES.STREET.DETAIL('total', 'new', ''));
  const count = useCountNumber(77);

  return (
    <Section>
      <Title>
        지금까지
        <br /> 붙여진 전단지 <br />
        <Title id='count'>{count}</Title>개
      </Title>
      <Flyer>
        <FlyerTitle>
          나이키 신발
          <FlyerTitle id='have'>있어요?</FlyerTitle>
        </FlyerTitle>
        <Tags>
          <span>#나이키 에어포스</span>
          <span>#나이키 한정판 신발</span>
          <span>#남자 발 사이즈 270</span>
        </Tags>
      </Flyer>
      <Button onClick={goStreet}>전단지골목가기</Button>
    </Section>
  );
};

export default MainSection;

const Section = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  background: url('/img/flyers.png') no-repeat center center;
  background-size: 90%;
  background-color: #f8f8f8;
`;

const Title = styled.span`
  font-family: 'Black Han Sans', sans-serif;
  font-size: 3rem;
  &#count {
    color: ${COLORS.MAIN};
  }
`;

const Button = styled.button`
  padding: 20px 60px 20px 30px;
  border: none;
  border-radius: 8px;
  background: url('/img/arrow.svg') no-repeat;
  background-position: 85% 53%;
  background-size: 13px;
  background-color: #373737;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
`;

const FlyerTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 900;
  text-align: center;
  line-height: 1.4;
  &#have {
    font-weight: 700;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
