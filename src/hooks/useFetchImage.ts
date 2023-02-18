import { useEffect, useRef, useState } from 'react';

import { convertURLtoFile } from '../utils/convertURLtoFile';
import { imgToBase64 } from '../utils/imgToBase64';

/* 이미지 처리 훅 */
export const useFetchImage = (oldImage: string[]) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<FileList | null>();
  const [images, setImages] = useState<{ image: File; url: string }[]>([]);

  // 이미지 추가 함수
  const handleClick = () => {
    if (images.length >= 2)
      return alert('이미지는 2개까지만 업로드 가능합니다 😓');
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // 이미지 삭제 함수
  const handleDelete = (clickedImage: File) => {
    setImages((prev) => prev.filter((item) => item.image !== clickedImage));
  };

  // 기존 이미지를 불러오는 작업
  useEffect(() => {
    const fetchImage = async (oldImage: string) => {
      const image = await convertURLtoFile(oldImage);
      const url = await imgToBase64(image);
      setImages((prev) => [...prev, { image, url }]);
    };
    oldImage.length && oldImage.map((image) => fetchImage(image));
  }, []);

  //이미지 선택 시 실행되는 작업
  useEffect(() => {
    if (file) {
      Array.from(file).map((image) => {
        imgToBase64(image).then((data) =>
          setImages((prev) => [...prev, { image: image, url: data }])
        );
      });
    }
  }, [file]);

  return { images, inputRef, setFile, handleClick, handleDelete };
};
