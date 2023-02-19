import { useEffect, useState } from 'react';

import { getImg } from '../apis/image';
import { ImageData } from '../interfaces/imageData';

const useGetImage = () => {
  const [image, setImage] = useState<ImageData>({ cloud: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await getImg();
        setImage(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return { data: image, isLoading };
};

export default useGetImage;
