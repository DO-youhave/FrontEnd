import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { COLORS } from '../../constants/colors';

interface LoadingProps {
  children: React.ReactNode;
}

const Loading = ({ children }: LoadingProps) => {
  return (
    <Container>
      <Spinning />
      <Text>{children}</Text>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(359deg);
  }
`;

const Spinning = styled.div`
  width: 80px;
  height: 80px;
  border: 6px solid #fff;
  border-right-color: ${COLORS.MAIN};
  border-top-color: ${COLORS.MAIN};
  border-radius: 100%;
  animation: ${spin} 1s infinite linear;
`;

const Text = styled.div`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 600;
  color: #373737;
`;
