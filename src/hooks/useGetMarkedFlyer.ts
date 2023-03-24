import { useEffect, useState } from 'react';

import { myMarked } from '../apis/User';
import { Flyer } from '../interfaces/main';

const useGetMarkedFlyer = () => {
  const [flyer, setFlyer] = useState<Flyer[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMarkedFlyer = async () => {
      setIsLoading(true);
      const data = await myMarked();
      setFlyer(data);
      setIsLoading(false);
    };
    getMarkedFlyer();
  }, []);

  return { flyer, isLoading };
};

export default useGetMarkedFlyer;
