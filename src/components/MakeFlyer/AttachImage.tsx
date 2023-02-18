import styled from '@emotion/styled';

import useGetMain from '../../hooks/useGetMain';
import ImageUpload from './ImageUpload';

const AttachImage = () => {
  const { data, isLoading } = useGetMain();
  if (isLoading) return <div>이미지 파일 로딩 중</div>;
  return (
    <Container>
      <ImageUpload oldImage={data.cloud.split(', ')} />
    </Container>
  );
};

export default AttachImage;

const Container = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #d9d9d9;
`;
