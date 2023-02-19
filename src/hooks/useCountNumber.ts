import { useEffect, useState } from 'react';

const useCountNumber = (number: number) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count < number) {
      setTimeout(() => {
        setCount(count + 1);
      }, 10);
    }
  }, [count]);

  return count;
};

export default useCountNumber;
