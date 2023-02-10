import styled from '@emotion/styled';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { COLORS } from '../constants/colors';
import { ROUTES } from '../constants/routes';
import { currentParam } from '../utils/currentPath';

const categorys: { id: string; name: string }[] = [
  { id: 'total', name: '전체' },
  { id: 'item', name: '물건' },
  { id: 'medical', name: '의료' },
  { id: 'fashion', name: '패션의류/잡화' },
  { id: 'parenting', name: '육아' },
  { id: 'study', name: '학습' },
  { id: 'worry', name: '고민' },
  { id: 'boast', name: '자랑' },
  { id: 'promotion', name: '홍보' },
];

const Category = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchValue: string = searchParams.get('q') || '';

  return (
    <Categorys>
      {categorys.map(({ id, name }) => (
        <Item
          key={id}
          id={currentParam('category', id)}
          onClick={() => navigate(ROUTES.STREET.DETAIL(id, searchValue))}>
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
  gap: 30px;
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
