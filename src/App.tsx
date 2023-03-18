import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MyPosting from './components/MyInfo/MyPosting';
import Recent from './components/MyInfo/Recent';
import { ROUTES } from './constants/routes';
import HeaderOff from './layouts/HeaderOff';
import HeaderOn from './layouts/HeaderOn';
import FlyerDetail from './pages/FlyerDetail';
import FlyerStreet from './pages/FlyerStreet';
import Home from './pages/Home';
import Login from './pages/Login';
import MakeFlyer from './pages/MakeFlyer';
import MyInfo from './pages/MyInfo';
import Redirect from './pages/Redirect';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HeaderOn />}>
          <Route index element={<Home />} />

          <Route path={ROUTES.STREET.ROOT} element={<FlyerStreet />} />
          <Route path={ROUTES.MY_PAGE.ROOT} element={<MyInfo />}>
            <Route index element={<Recent />} />
            <Route path={ROUTES.MY_PAGE.RECENT} element={<Recent />} />
            <Route path={ROUTES.MY_PAGE.POSTING} element={<MyPosting />} />
            <Route path={ROUTES.MY_PAGE.COMMENT} element={<div>Comment</div>} />
            <Route
              path={ROUTES.MY_PAGE.BOOKMARK}
              element={<div>Bookmark</div>}
            />
            <Route path={ROUTES.MY_PAGE.EXIT} element={<div>Exit</div>} />
          </Route>
        </Route>

        <Route element={<HeaderOff />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.POSTING} element={<MakeFlyer />} />
          <Route path={ROUTES.FLYER.ROOT} element={<FlyerDetail />} />
          <Route
            path={ROUTES.NAVER_REDIRECT}
            element={<Redirect type='naver' />}
          />
          <Route
            path={ROUTES.KAKAO_REDIRECT}
            element={<Redirect type='kakao' />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
