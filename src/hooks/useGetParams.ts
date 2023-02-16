import { useSearchParams } from 'react-router-dom';

const useGetParams = () => {
  const [searchParams] = useSearchParams();
  const category: string = searchParams.get('category') || '';
  const sort: string = searchParams.get('sort') || '';
  const searchValue: string = searchParams.get('q') || '';

  return { category, sort, searchValue };
};
export default useGetParams;
