import { useSearchParams } from 'react-router-dom';

const getParams = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sort') || '';
  const searchValue = searchParams.get('q') || '';

  return { category, sort, searchValue };
};
export default getParams;
