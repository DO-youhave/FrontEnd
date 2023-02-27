import styled from '@emotion/styled';

import useSearch from '../../hooks/useSearch';

const MobileSearch = () => {
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

export default MobileSearch;

const Container = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    border: 1px solid #cdcdcd;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
`;

const Input = styled.input`
  width: 400px;
  padding: 13px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 13px;
  &::placeholder {
    color: #cdcdcd;
  }
`;

const SearchBtn = styled.button`
  width: 60px;
  height: 20px;
  border: none;
  background: url('/img/search.svg') no-repeat center center;
  background-size: contain;
  cursor: pointer;
`;
