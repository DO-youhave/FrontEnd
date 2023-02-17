import styled from '@emotion/styled';

import useSearch from '../../hooks/useSearch';

const Search = () => {
  const { input, handleClick, handleEnter } = useSearch();

  return (
    <Container>
      <Input
        ref={input}
        placeholder='찾고싶은 전단지가 있나요?'
        onKeyDown={handleEnter}
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
  width: 450px;
  padding: 14px 0;
  border: none;
  background-size: 4% auto;
  outline: none;
  &::placeholder {
    color: #cdcdcd;
  }
`;

const SearchBtn = styled.button`
  width: 23px;
  height: 23px;
  border: none;
  background: url('/img/search.svg') no-repeat center center;
  background-size: contain;
  cursor: pointer;
`;
