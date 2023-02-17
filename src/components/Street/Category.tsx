import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { StreetCategory } from '../../constants/categorys';
import { COLORS } from '../../constants/colors';
import { ROUTES } from '../../constants/routes';
import getParams from '../../hooks/getParams';
import { currentParam } from '../../utils/currentPath';

const Category = () => {
  const navigate = useNavigate();
  const { sort, searchValue } = getParams();

  return (
    <Categorys>
      {StreetCategory.map(({ id, name }) => (
        <Item
          key={id}
          id={currentParam('category', id)}
          onClick={() => navigate(ROUTES.STREET.DETAIL(id, sort, searchValue))}>
          {name}
        </Item>
      ))}
    </Categorys>
  );
};

export default Category;

const Categorys = styled.ul`
  display: inline-flex;
  flex-direction: column;
  list-style: none;
  gap: 35px;
  position: absolute;
  left: 5%;
  top: 800px;
`;

const Item = styled.li`
  display: inline-block;
  color: #a3a3a3;
  cursor: pointer;
  &#current {
    color: #000;
    font-weight: 700;
    &:after {
      transform: scaleX(0.2);
    }
  }
  &:hover {
    color: #000;
    font-weight: 700;
  }
  &:after {
    content: '';
    display: block;
    padding-bottom: 5px;
    border-bottom: 3px solid ${COLORS.MAIN};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 0% 50%;
  }
  &:hover:after {
    transform: scaleX(0.2);
  }
`;
