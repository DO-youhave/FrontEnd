import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import useGetParams from '../../hooks/useGetParams';
import useGetTags from '../../hooks/useGetTags';

const PopularTags = () => {
  const navigate = useNavigate();
  const { category, tag: nowTag, sort, searchValue } = useGetParams();
  const { tags } = useGetTags(category);

  // 태그 리스트 변경 함수
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.target as HTMLInputElement;
    if (nowTag === id) {
      navigate(ROUTES.STREET.DETAIL(category, '', sort, searchValue));
    } else {
      navigate(ROUTES.STREET.DETAIL(category, id, sort, searchValue));
    }
  };
  const isChecked = (tag: string) => (nowTag === tag ? 'checked' : '');

  return (
    <Container>
      <Title>
        인기 태그
        <img
          src='/img/popular.png'
          alt='인기 태그'
          width={18}
          style={{ marginLeft: '5px' }}
        />
      </Title>
      <Tags>
        {tags?.map((tag) => (
          <Tag
            key={tag}
            className={isChecked(tag)}
            id={tag}
            onClick={handleClick}>
            #{tag}
          </Tag>
        ))}
      </Tags>
    </Container>
  );
};

export default PopularTags;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 100px;
`;

const Tag = styled.div`
  padding: 12px 22px 10px;
  border-radius: 29.5px;
  cursor: pointer;
  font-size: 13px;
  background-color: #fff;
  box-shadow: 0 0px 7px rgba(0, 0, 0, 0.1);
  transition: background-color 0.1s ease;
  @media screen and (max-width: 768px) {
    padding: 10px 20px 8px;
    font-size: 12px;
  }
  &.checked {
    background: #049669;
    color: #fff;
  }
`;
