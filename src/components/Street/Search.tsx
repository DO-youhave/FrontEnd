import styled from '@emotion/styled';

import useSearch from '../../hooks/useSearch';

const Search = () => {
  const { searchValue, handleChange, handleClick, handleEnter } = useSearch();

  return (
    <Container>
      <Input
        placeholder='찾고싶은 전단지가 있나요?'
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleEnter}
        onClick={handleClick}
      />
      <SearchBtn onClick={handleClick} />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  border-bottom: 1px solid #cdcdcd;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 400px;
  padding: 13px 0;
  border: none;
  background-size: 4% auto;
  outline: none;
  font-size: 13px;
  &::placeholder {
    color: #cdcdcd;
  }
`;

const SearchBtn = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background: url('/img/search.svg') no-repeat center center;
  background-size: contain;
  cursor: pointer;
`;
