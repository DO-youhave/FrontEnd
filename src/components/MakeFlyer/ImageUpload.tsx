import styled from '@emotion/styled';

import { ImageUploadProps } from '../../interfaces/flyerForm';

const ImageUpload = ({ image }: { image: ImageUploadProps }) => {
  const { images, inputRef, handleChange, handleClick, handleDelete } = image;
  return (
    <Container>
      {/* 연동 INPUT (hidden) */}
      <input
        type='file'
        accept='image/*'
        ref={inputRef}
        hidden
        onChange={handleChange}
      />

      {/* 사진 추가 버튼 */}
      <Container id='add' onClick={handleClick}>
        <ImageShape src='/img/image.svg' alt='이미지추가' />
        <ImagePlaceholder id={String(!images.length)}>
          상세 사진 추가 (선택사항, 최대 2개)
        </ImagePlaceholder>
      </Container>

      {/* 사진 미리보기 */}
      <Container id='imgList'>
        {images.map(({ url, image }) => (
          <ImgBox src={url} key={image.name}>
            <RemoveButton
              src='/img/close.png'
              onClick={() => handleDelete(image)}
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
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
  &#imgList {
    gap: 30px;
    margin-left: 30px;
    @media screen and (max-width: 768px) {
      gap: 20px;
    }
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
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`;

const RemoveButton = styled.img`
  position: absolute;
  width: 20px;
  right: -10px;
  top: -10px;
  cursor: pointer;
`;

const ImageShape = styled.img`
  @media screen and (max-width: 768px) {
    width: 30px;
  }
`;

const ImagePlaceholder = styled.span`
  @media screen and (max-width: 768px) {
    &#false {
      display: none;
    }
  }
`;
