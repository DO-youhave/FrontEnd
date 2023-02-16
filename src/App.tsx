import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import { ROUTES } from './constants/routes';
import HeaderOff from './layouts/HeaderOff';
import HeaderOn from './layouts/HeaderOn';
import MyInfo from './layouts/MyInfo';
import FlyerStreet from './pages/FlyerStreet';
import Home from './pages/Home';
import MakeFlyer from './pages/MakeFlyer';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HeaderOn />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.STREET.ROOT} element={<FlyerStreet />} />
          <Route path={ROUTES.MY_PAGE.ROOT} element={<MyInfo />}>
            <Route index element={<div>MyInfo</div>} />
            <Route path={ROUTES.MY_PAGE.RECENT} element={<div>Recent</div>} />
            <Route path={ROUTES.MY_PAGE.POSTING} element={<div>Posting</div>} />
            <Route path={ROUTES.MY_PAGE.COMMENT} element={<div>Comment</div>} />
            <Route
              path={ROUTES.MY_PAGE.BOOKMARK}
              element={<div>Bookmark</div>}
            />
            <Route path={ROUTES.MY_PAGE.EXIT} element={<div>Exit</div>} />
          </Route>
        </Route>

        <Route path={ROUTES.POSTING} element={<HeaderOff />}>
          <Route index element={<MakeFlyer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
