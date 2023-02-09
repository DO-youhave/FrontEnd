import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import { ROUTES } from './constants/routes';
import Home from './pages/Home';
import MyInfo from './pages/MyInfo';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.MY_PAGE} element={<MyInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
