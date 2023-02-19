import styled from '@emotion/styled';

const FlyerList = () => {
  return (
    <Container>
      <Flyer>나이키 신발 찾아요</Flyer>
      <Flyer></Flyer>
      <Flyer></Flyer>
      <Flyer></Flyer>
      <Flyer></Flyer>
    </Container>
  );
};

export default FlyerList;

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 50px;
`;
const Flyer = styled.li`
  background-color: #000;
  margin-bottom: 30px;
  height: 320px;
  background: url('/img/flyerBg.png') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.1s ease;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0px 0px 0px;
  }
`;
