import styled from '@emotion/styled';

interface FlyerProps {
  children: React.ReactNode;
  onClick: () => void;
  id: number;
}

const Flyer = ({ children, id, onClick }: FlyerProps) => {
  return (
    <AlertBox key={id} onClick={onClick}>
      <BoxTape src='/img/tape.svg' alt='tape' />
      {children}
    </AlertBox>
  );
};

export default Flyer;

export const AlertBox = styled.div`
  height: 220px;
  padding: 30px 10px;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: url('/img/flyerBg.png') no-repeat center center;
  background-size: cover;
  transition: box-shadow 0.1s ease;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  &:hover {
    box-shadow: 0px 0px 0px;
  }
  @media screen and (max-width: 576px) {
    background: #fff;
    
`;

export const BoxTape = styled.img`
  position: absolute;
  width: 35%;
  top: -12px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
