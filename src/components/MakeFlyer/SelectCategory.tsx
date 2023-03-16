import styled from '@emotion/styled';

import { SelectCategoryProps } from '../../interfaces/flyerForm';
import Categorys from './Categorys';

const SelectCategory = ({ controller }: SelectCategoryProps) => {
  const { backPage, handleChangeRadio, category } = controller;

  return (
    <Category>
      <BackArrow onClick={backPage} />

      <div style={{ margin: '60px 0 40px', fontWeight: '600' }}>
        카테고리 설정
      </div>

      <Categorys handleChangeRadio={handleChangeRadio} category={category} />
    </Category>
  );
};

export default SelectCategory;

const Category = styled.div`
  width: 300px;
  min-height: 100vh;
  background: #f5f5f5;
  padding: 50px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BackArrow = styled.div`
  width: 30px;
  height: 30px;
  background: url('/img/back.png') no-repeat center center;
  background-size: contain;
  cursor: pointer;
`;
