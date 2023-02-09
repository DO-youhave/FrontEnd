import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Category from './components/Category';
import Header from './components/Header';
import { ROUTES } from './constants/routes';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Category />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
