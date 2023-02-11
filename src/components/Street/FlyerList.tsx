import styled from '@emotion/styled';

const FlyerList = () => {
  return (
    <Container>
      <Flyer></Flyer>
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
  grid-template-columns: 260px 260px 260px 260px;
  width: 80%;
  justify-content: space-between;
`;
const Flyer = styled.li`
  background-color: #000;
  margin-bottom: 30px;
  height: 300px;
`;
