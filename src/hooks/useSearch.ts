import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import useGetParams from './useGetParams';

const useSearch = () => {
  const navigate = useNavigate();
  const input = useRef<HTMLInputElement>(null);
  const { category, sort, searchValue: currentValue } = useGetParams();
  const searchValue: string = input.current ? input.current.value : '';
  const route: string = ROUTES.STREET.DETAIL(category, sort, searchValue);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(route);
    }
  };
  const handleClick = () => {
    navigate(route);
  };

  useEffect(() => {
    if (input.current) {
      input.current.value = currentValue;
    }
  }, [currentValue]);

  return { input, handleEnter, handleClick };
};

export default useSearch;
