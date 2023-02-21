import styled from '@emotion/styled';

import { CategoryItem } from '../../constants/categorys';
import { COLORS } from '../../constants/colors';
import { SelectCategoryProps } from '../../interfaces/flyerForm';

const SelectCategory = ({ controller }: SelectCategoryProps) => {
  const { backPage, handleChangeRadio, category } = controller;

  return (
    <Category>
      <BackArrow onClick={backPage} />

      <div style={{ margin: '60px 0 40px', fontWeight: '600' }}>
        카테고리 설정
      </div>

      <CategoryForm onChange={handleChangeRadio}>
        {CategoryItem.map(({ name, id }) => (
          <div key={name} style={{ display: 'flex' }}>
            <CategoryInput
              id={name}
              checked={category === id}
              readOnly
              type='radio'
              name='item'
              value={id}
            />
            <CategoryLabel htmlFor={name}>{name}</CategoryLabel>
          </div>
        ))}
      </CategoryForm>
    </Category>
  );
};

export default SelectCategory;

const Category = styled.div`
  width: 300px;
  min-height: 100vh;
  background: #f5f5f5;
  padding: 50px;
`;

const BackArrow = styled.div`
  width: 30px;
  height: 30px;
  background: url('/img/back.png') no-repeat center center;
  background-size: contain;
  cursor: pointer;
`;

const CategoryForm = styled.form`
  gap: 20px;
`;
const CategoryInput = styled.input`
  appearance: none;
  border: 1px solid #adadad;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  position: relative;
  margin-right: 20px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 29%;
    display: none;
  }

  &:checked {
    background: ${COLORS.MAIN};
    border: 1px solid ${COLORS.MAIN};
    &::after {
      display: block;
      border: 2px solid #fff;
      border-top: 0;
      border-right: 0;
      transform: rotate(-45deg);
      transform-origin: 100% 10%;
    }
  }

  &:hover {
    box-shadow: 0 0 5px rgba(4, 150, 105, 0.8);
    border: none;
  }
`;
const CategoryLabel = styled.label`
  cursor: pointer;
  margin-bottom: 35px;
`;
