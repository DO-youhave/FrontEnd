import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';

import { flyerList } from '../apis/Main';
import useGetParams from './useGetParams';

const useGetFlyerList = () => {
  const { searchValue: search, sort, category, tag } = useGetParams();
  const { ref, inView } = useInView();
  const params = { search, sort, category, tag };
  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    ['flyerList', params],
    ({ pageParam = 1 }) => flyerList(pageParam, params),
    {
      getNextPageParam: ({ isLast, nextPage }) => {
        if (isLast) return undefined;
        return nextPage;
      },
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return { ref, data, isLoading };
};

export default useGetFlyerList;
