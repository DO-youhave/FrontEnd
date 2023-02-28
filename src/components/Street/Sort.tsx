import styled from '@emotion/styled';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import useGetParams from '../../hooks/useGetParams';
import Select from '../shared/Select';

const sortList = [
  {
    id: 'new',
    name: '최신순',
  },
  {
    id: 'click',
    name: '조회순',
  },
  {
    id: 'reply',
    name: '댓글 많은 순',
  },
];

const Sort = ({ id }: { id?: string }) => {
  const { category, tag, sort, searchValue } = useGetParams();
  const navigate = useNavigate();

  const handleSort = (value: string) => {
    const id = value === sort ? 'selected' : undefined;

    return id;
  };

  return id === 'mobile' ? (
    <Select id={id} type='sort' array={sortList} />
  ) : (
    <SortContainer>
      {sortList.map(({ id, name }) => (
        <Fragment key={id}>
          <SortList
            id={handleSort(id)}
            onClick={() =>
              navigate(ROUTES.STREET.DETAIL(category, tag, id, searchValue))
            }>
            {name}
          </SortList>
          <SortList id={id}>|</SortList>
        </Fragment>
      ))}
    </SortContainer>
  );
};

export default Sort;

const SortContainer = styled.ul`
  display: flex;
  font-size: 13px;
  color: #a3a3a3;
  font-weight: 400;
  gap: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SortList = styled.li`
  cursor: pointer;
  &:hover {
    color: #000;
  }
  &#selected {
    color: #000;
    font-weight: 600;
  }
  &#reply {
    display: none;
  }
`;
