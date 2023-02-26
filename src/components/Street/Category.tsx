import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StreetCategory } from '../../constants/categorys';
import { COLORS } from '../../constants/colors';
import { ROUTES } from '../../constants/routes';
import useGetParams from '../../hooks/useGetParams';

const Category = () => {
  const navigate = useNavigate();
  const { sort, searchValue, category } = useGetParams();
  const nowCategory = StreetCategory.find(
    (value) => value.id === category
  )?.name;
  const [onCategory, setOnCategory] = useState(false);

  const setId = (id: string) => String(category === id && 'current');

  const handleOn = () => {
    setOnCategory(!onCategory);
  };

  const handleArrow = String(onCategory && 'on');

  return (
    <Container>
      <Selected id={handleArrow} onClick={handleOn}>
        {nowCategory}
      </Selected>

      {onCategory && (
        <Categorys>
          {StreetCategory.map(({ id, name }) => (
            <Item
              key={id}
              id={setId(id)}
              onClick={() => {
                navigate(ROUTES.STREET.DETAIL(id, sort, searchValue));
                setOnCategory(!onCategory);
              }}>
              {name}
            </Item>
          ))}
        </Categorys>
      )}
    </Container>
  );
};

export default Category;

const Container = styled.div`
  position: relative;
`;

const Selected = styled.div`
  border: 1px solid #d1d1d1;
  padding: 10px 80px 10px 25px;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  font-weight: 600;
  background: url('/img/down.png') no-repeat 80% center;
  background-size: 10% auto;
  color: ${COLORS.MAIN};
  cursor: pointer;
  &#on {
    background: url('/img/up.png') no-repeat 80% center;
    background-size: 10% auto;
  }
`;

const Categorys = styled.ul`
  list-style: none;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 10;
  border: 1px solid #d1d1d1;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 25px;
`;

const Item = styled.li`
  color: #a3a3a3;
  cursor: pointer;
  font-size: 18px;
  padding: 10px 0;
  line-height: 18px;
  text-align: left;
  &#current {
    color: ${COLORS.MAIN};
    font-weight: 700;
    &:after {
      transform: scaleX(1);
    }
  }
  &:hover {
    color: ${COLORS.MAIN};
    font-weight: 700;
  }
  &:after {
    content: '';
    display: block;
    padding-top: 7px;
    border-bottom: 2px solid ${COLORS.MAIN};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 0% 50%;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;
