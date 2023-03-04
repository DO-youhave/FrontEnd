import { useEffect, useState } from 'react';

import { flyerCount } from '../apis/Main';

const useCountNumber = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    try {
      const getCount = async () => {
        const allCount = await flyerCount();
        if (count < (allCount as number)) {
          setTimeout(() => {
            setCount(count + 1);
          }, 10);
        }
      };
      getCount();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return count;
};

export default useCountNumber;
