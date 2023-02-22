import LoginSection from '../components/Home/LoginSection';
import MainSection from '../components/Home/MainSection';
import MovingText from '../components/Home/MovingText';
import PromotionSection from '../components/Home/PromotionSection';

const Home = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <MainSection />
      <PromotionSection />
      <MovingText />
      <LoginSection />
    </div>
  );
};

export default Home;
