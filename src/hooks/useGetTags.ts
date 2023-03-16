import { useEffect, useState } from 'react';

import { popularTags } from './../apis/Main';

const useGetTags = (category: string) => {
  const [tags, setTags] = useState<string[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTags = async () => {
      setIsLoading(true);
      const tags = await popularTags(category);
      setTags(tags);
      setIsLoading(false);
    };
    getTags();
  }, [category]);

  return { tags, isLoading };
};

export default useGetTags;
