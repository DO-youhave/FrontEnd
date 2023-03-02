import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { currentPath } from '../../utils/currentPath';
import { menus } from './Menus';

const MobileMenus = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(false);
  const nowPath = menus.find(({ id }) => currentPath(id) === 'current');
  const handleSelect = () => {
    setSelect(!select);
  };
  return (
    <Container>
      <Selected id={select ? 'on' : ''} onClick={handleSelect}>
        {nowPath?.name}
      </Selected>
      {select && (
        <Items>
          {menus.map(({ id, name }) => (
            <Item
              key={id}
              id={nowPath?.id === id ? 'current' : ''}
              onClick={() => {
                navigate(id);
                setSelect(false);
              }}>
              {name}
            </Item>
          ))}
        </Items>
      )}
    </Container>
  );
};

export default MobileMenus;

const Container = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    margin-bottom: 30px;
    width: 150px;
  }
`;

const Selected = styled.div`
  background: url('/img/down.png') no-repeat 95% center;
  background-size: 16px;
  font-size: 16px;
  padding: 10px 0px;

  &#on {
    background: url('/img/up.png') no-repeat 95% center;
    background-size: 16px;
  }
`;

const Items = styled.ul`
  list-style: none;
  position: absolute;
  z-index: 10;
  border: 1px solid #d1d1d1;
  top: 30px;
  left: 0px;
  padding: 10px;
  width: 110px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.1);
  &#sort {
    width: 90px;
    left: -10px;
  }
`;

const Item = styled.li`
  font-size: 13px;
  font-weight: 400;
  padding: 5px 0;
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
`;
