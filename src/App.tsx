import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import { ROUTES } from './constants/routes';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
