import { useLocation, useSearchParams } from 'react-router-dom';

export const currentPath = (id: string) => {
  const { pathname } = useLocation();
  return String(pathname.includes(id) && 'current');
};

export const currentParam = (param: string, id: string) => {
  const [searchParams] = useSearchParams();
  return String(searchParams.get(param) === id && 'current');
};
