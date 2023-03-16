import { useEffect, useState } from 'react';

import { flyerCount } from '../apis/Main';

const useGetCount = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const getCount = async () => {
      const response = await flyerCount();
      setCount(response);
    };
    getCount();
  }, []);

  return count;
};

export default useGetCount;
