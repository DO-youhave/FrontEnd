import styled from '@emotion/styled';

import { CategoryItem } from '../../constants/categorys';
import { COLORS } from '../../constants/colors';

interface CategorysProps {
  handleChangeRadio: (e: React.ChangeEvent<HTMLFormElement>) => void;
  category: string | undefined;
}

const Categorys = ({ handleChangeRadio, category }: CategorysProps) => {
  return (
    <Form onChange={handleChangeRadio}>
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
    </Form>
  );
};

export default Categorys;

const Form = styled.form`
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }
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
  @media (max-width: 768px) {
    margin-right: 15px;
  }
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
  @media (max-width: 768px) {
    margin-bottom: 0px;
    font-size: 14px;
  }
`;
