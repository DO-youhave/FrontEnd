import { useSearchParams } from 'react-router-dom';

const useGetParams = () => {
  const [searchParams] = useSearchParams();
  const category: string = searchParams.get('category') || '';
  const tag: string = searchParams.get('tag') || '';
  const sort: string = searchParams.get('sort') || '';
  const searchValue: string = searchParams.get('q') || '';

  return { category, tag, sort, searchValue };
};
export default useGetParams;
