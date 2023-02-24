import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { COLORS } from '../../constants/colors';
import { firstTextArr, secondTextArr } from '../../constants/textExamples';

const MovingText = () => {
  return (
    <MovingContainer>
      <Half>
        {firstTextArr.map((text, idx) => (
          <Balloon key={idx}>{text}</Balloon>
        ))}
      </Half>
      <Half id='reverse'>
        {secondTextArr.map((text, idx) => (
          <Balloon key={idx}>{text}</Balloon>
        ))}
      </Half>
    </MovingContainer>
  );
};

export default MovingText;

const marquee = keyframes`
  0% {
    transform: translateX(-20%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const reverseMarquee = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-20%);
  }
`;

const MovingContainer = styled.div`
  height: 200px;
  background-color: ${COLORS.MAIN};
`;

const Balloon = styled.div`
  width: 400px;
  background: url('/img/textBalloon.png') no-repeat;
  background-size: contain;
  scale: 1.3;
  padding: 1.2rem 1.3rem 1.2rem 1.5rem;
  font-size: 0.8rem;
`;

const Half = styled.div`
  height: 50%;
  width: 600%;
  display: flex;
  align-items: center;
  animation: ${marquee} 30s linear infinite;
  &#reverse {
    animation: ${reverseMarquee} 30s linear infinite;
  }
`;
