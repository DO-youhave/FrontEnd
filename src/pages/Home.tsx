import styled from '@emotion/styled';

import MainSection from '../components/Home/MainSection';

const Home = () => {
  return (
    <div>
      <MainSection />
      <Section id='second'></Section>
      <Section id='last'></Section>
    </div>
  );
};

export default Home;

const Section = styled.div`
  display: flex;
  height: 100vh;
`;
