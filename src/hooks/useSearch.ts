import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ROUTES } from '../constants/routes';

const useSearch = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchParams] = useSearchParams();
  const category: string = searchParams.get('category') || '';
  const route = ROUTES.STREET.DETAIL(category, searchValue);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(route);
    }
  };

  return { navigate, route, setSearchValue, handleEnter };
};

export default useSearch;
