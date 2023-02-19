import styled from '@emotion/styled';

import { COLORS } from '../../constants/colors';

interface FlyerProps {
  children: React.ReactNode;
}

const Flyer = ({ children }: FlyerProps) => {
  return (
    <Container>
      <Tapes id='left' />
      <Tapes id='right' />
      {children}
    </Container>
  );
};

export default Flyer;

const Container = styled.div`
  padding: 60px 40px;
  width: 250px;
  height: 330px;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: default;
  background: url('/img/flyerBg.png') no-repeat center center;
  background-size: cover;
  transition: box-shadow 0.1s ease;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
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
