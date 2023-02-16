import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

const HeaderOn = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HeaderOn;
