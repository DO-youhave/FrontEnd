import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import useGetParams from './useGetParams';

const useSearch = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>('');
  const { tag, sort, searchValue: currentValue } = useGetParams();
  const route: string = ROUTES.STREET.DETAIL('', tag, sort, searchValue);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(route);
    }
  };
  const handleClick = () => {
    navigate(route);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (currentValue) {
      setSearchValue(currentValue);
    }
  }, [currentValue]);

  return { searchValue, handleChange, handleEnter, handleClick };
};

export default useSearch;
