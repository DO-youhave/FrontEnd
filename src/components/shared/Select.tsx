import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { COLORS } from '../../constants/colors';
import { ROUTES } from '../../constants/routes';
import useGetParams from '../../hooks/useGetParams';

const Select = ({
  array,
  type,
  id,
}: {
  array: { id: string; name: string }[];
  type: 'category' | 'sort';
  id?: string;
}) => {
  const navigate = useNavigate();
  const { sort, searchValue, category, tag } = useGetParams();
  const param = type === 'category' ? category : sort;
  const nowSelect = array.find(({ id }) => id === param)?.name;
  const [onSelect, setOnSelect] = useState(false);

  const setId = (id: string) => String(param === id && 'current');

  const handleOn = () => {
    setOnSelect(!onSelect);
  };
  const handleArrow = String(onSelect && 'on');

  return (
    <Container id={id}>
      <Selected id={handleArrow} onClick={handleOn}>
        {nowSelect}
      </Selected>

      {onSelect && (
        <Items id={type}>
          {array.map(({ id, name }) => (
            <Item
              key={id}
              id={setId(id)}
              onClick={() => {
                type === 'category'
                  ? navigate(ROUTES.STREET.DETAIL(id, tag, sort, searchValue))
                  : navigate(
                      ROUTES.STREET.DETAIL(category, tag, id, searchValue)
                    );
                setOnSelect(!onSelect);
              }}>
              {name}
            </Item>
          ))}
        </Items>
      )}
    </Container>
  );
};

export default Select;

const Container = styled.div`
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
  &#mobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
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
  @media screen and (max-width: 768px) {
    font-size: 13px;
    color: #000;
    border: none;
    border-radius: 0;
    padding: 0px 30px 0px 0px;
    box-shadow: none;
    background: url('/img/down.png') no-repeat 95% center;
    background-size: 10px 10px;
    &#on {
      background: url('/img/up.png') no-repeat 95% center;
      background-size: 10px 10px;
    }
  }
`;

const Items = styled.ul`
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
  @media screen and (max-width: 768px) {
    top: 20px;
    left: -10px;
    padding: 10px;
    width: 70px;
    border-radius: 10px;
    &#sort {
      width: 90px;
      left: -10px;
    }
  }
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
  @media screen and (max-width: 768px) {
    font-size: 13px;
    font-weight: 400;
    padding: 5px 0;
    line-height: 14px;
    &#current {
      color: #000;
      font-weight: 700;
      &:after {
        transform: scaleX(1);
      }
    }
    &:hover {
      color: #000;
      font-weight: 700;
    }
    &:after {
      content: '';
      display: block;
      padding-top: 7px;
      border-bottom: 2px solid #000;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
      transform-origin: 0% 50%;
    }
    &:hover:after {
      transform: scaleX(1);
    }
  }
`;
