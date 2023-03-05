import LoginSection from '../components/Home/LoginSection';
import MainSection from '../components/Home/MainSection';
import MovingText from '../components/Home/MovingText';
import PromotionSection from '../components/Home/PromotionSection';
import { TOKEN_KEY } from '../constants/auth';
import { getLocalStorage } from '../utils/storage';

const Home = () => {
  const isLogin = getLocalStorage(TOKEN_KEY);
  return (
    <div style={{ overflow: 'hidden' }}>
      <MainSection />
      {!isLogin ? (
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
