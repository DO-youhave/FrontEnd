import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const useSearch = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(`/street?category=${category}&q=${searchValue}`);
    }
  };

  return { navigate, searchValue, setSearchValue, handleEnter };
};

export default useSearch;
