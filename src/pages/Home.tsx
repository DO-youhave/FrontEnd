import LoginSection from '../components/Home/LoginSection';
import MainSection from '../components/Home/MainSection';
import MovingText from '../components/Home/MovingText';
import PromotionSection from '../components/Home/PromotionSection';
import { isLogin } from '../utils/storage';

const Home = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <MainSection />
      {!isLogin() ? (
        <>
          <PromotionSection />
          <MovingText />
          <LoginSection />
        </>
      ) : null}
    </div>
  );
};

export default Home;
