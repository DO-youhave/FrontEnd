import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Category from './components/Category';
import Header from './components/Header';
import { ROUTES } from './constants/routes';
import MyInfo from './layouts/MyInfo';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Category />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.MY_PAGE.ROOT} element={<MyInfo />}>
          <Route index element={<div>MyInfo</div>} />
          <Route path={ROUTES.MY_PAGE.RECENT} element={<div>Recent</div>} />
          <Route path={ROUTES.MY_PAGE.POSTING} element={<div>Posting</div>} />
          <Route path={ROUTES.MY_PAGE.COMMENT} element={<div>Comment</div>} />
          <Route path={ROUTES.MY_PAGE.BOOKMARK} element={<div>Bookmark</div>} />
          <Route path={ROUTES.MY_PAGE.EXIT} element={<div>Exit</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
