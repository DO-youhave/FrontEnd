import { useLocation } from 'react-router-dom';

export const currentPath = (id: string) => {
  const { pathname } = useLocation();
  return String(pathname.includes(id) && 'current');
};
