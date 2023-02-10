import styled from '@emotion/styled';
import { Fragment, useState } from 'react';

const TagData: string[] = [
  '#운동화',
  '#나이키',
  '#맥북',
  '#애플워치',
  '#수학문제',
];

const PopularTags = () => {
  const [tags, setTags] = useState<string[]>([]); // 선택된 태그 리스트

  // 태그 리스트 변경 함수
  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const { checked, value } = e.target as HTMLInputElement;
    if (checked) {
      setTags([...tags, value]);
    } else {
      setTags(tags.filter((tag) => tag !== value));
    }
  };

  return (
    <Container>
      <Title>인기 태그 🔥</Title>
      <Tags onChange={(e) => handleChange(e)}>
        {TagData.map((tag) => (
          <Fragment key={tag}>
            <Tag id={tag} type='checkbox' name='tag' value={tag} hidden />
            <Label htmlFor={tag}>{tag}</Label>
          </Fragment>
        ))}
      </Tags>
    </Container>
  );
};

export default PopularTags;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 54px;
`;

const Tags = styled.form`
  display: flex;
  gap: 15px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const Label = styled.label`
  padding: 10px 24px;
  border: 2px solid #d1d1d1;
  border-radius: 29.5px;
  cursor: pointer;
`;

const Tag = styled.input`
  &:checked + ${Label} {
    background: #049669;
    color: #fff;
    border: 2px solid #049669;
  }
`;
