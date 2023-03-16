import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';

import { flyerList } from '../apis/Main';
import { FlyerListParams } from '../interfaces/main';
import useGetParams from './useGetParams';

const useGetFlyerList = () => {
  const { searchValue: search, sort, category, tag } = useGetParams();
  const { ref, inView } = useInView();
  const params: FlyerListParams = new Object();
  if (search) params.search = search;
  if (sort) params.sort = sort;
  if (category) params.category = category;
  if (tag) params.tag = tag;

  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    ['flyerList', params],
    ({ pageParam = 0 }) => flyerList(pageParam, params),
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
