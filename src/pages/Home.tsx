import styled from '@emotion/styled';

import MainSection from '../components/Home/MainSection';
import PromotionSection from '../components/Home/PromotionSection';

const Home = () => {
  return (
    <div>
      <MainSection />
      <PromotionSection />
      <Section id='last'></Section>
    </div>
  );
};

export default Home;

const Section = styled.div`
  display: flex;
  height: 100vh;
`;
