import styled from '@emotion/styled';

import { COLORS } from '../../constants/colors';

interface FlyerProps {
  children: React.ReactNode;
  id?: string;
}

const Flyer = ({ children, id }: FlyerProps) => {
  return (
    <Container id={id}>
      <Tapes id='left' />
      <Tapes id='right' />
      {children}
    </Container>
  );
};

export default Flyer;

const Container = styled.div`
  padding: 63px 40px;
  width: 250px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: default;
  background: url('/img/flyerBg.png') no-repeat center center;
  background-size: cover;
  transition: box-shadow 0.1s ease;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  &#promotion {
    height: 330px;
    padding: 60px 40px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  }
  @media all and (max-width: 767px) {
    margin-bottom: 30px;
    width: 200px;
    height: 280px;
    padding: 60px 20px;
  }
`;

const Tapes = styled.div`
  position: absolute;
  top: -15px;
  width: 20px;
  height: 30px;
  background-color: ${COLORS.MAIN};
  &#left {
    left: 30px;
  }
  &#right {
    right: 30px;
  }
`;
