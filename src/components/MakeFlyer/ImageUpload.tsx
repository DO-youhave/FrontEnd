import styled from '@emotion/styled';

import { useFetchImage } from '../../hooks/useFetchImage';

interface ImageUploadProps {
  oldImage: string[];
}

const ImageUpload = ({ oldImage }: ImageUploadProps) => {
  const { images, inputRef, setFile, handleClick, handleDelete } =
    useFetchImage(oldImage);
  return (
    <Container>
      {/* 연동 INPUT (hidden) */}
      <input
        type='file'
        accept='image/*'
        ref={inputRef}
        hidden
        onChange={(e) => setFile(e.target.files)}
      />

      {/* 사진 추가 버튼 */}
      <Container id='add' onClick={handleClick}>
        <img src='/img/image.svg' alt='이미지추가' />
        상세 사진 추가 (최대 2개)
      </Container>

      {/* 사진 미리보기 */}
      <Container id='imgList'>
        {images.map((item) => (
          <ImgBox src={item.url} key={item.image.name}>
            <RemoveButton
              src='/img/close.png'
              onClick={() => handleDelete(item.image)}
            />
          </ImgBox>
        ))}
      </Container>
    </Container>
  );
};

export default ImageUpload;

const Container = styled.div`
  display: flex;
  align-items: center;
  &#add {
    color: #adadad;
    font-weight: 400;
    gap: 15px;
    cursor: pointer;
  }
  &#imgList {
    gap: 30px;
    margin-left: 30px;
  }
`;

const ImgBox = styled.div<{ src: string }>`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  background: url(${({ src }) => src}) no-repeat center center;
  background-size: cover;
  position: relative;
`;
const RemoveButton = styled.img`
  position: absolute;
  width: 20px;
  right: -10px;
  top: -10px;
  cursor: pointer;
`;
