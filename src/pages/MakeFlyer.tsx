import styled from '@emotion/styled';

import FlyerForm from '../components/MakeFlyer/FlyerForm';
import SelectCategory from '../components/MakeFlyer/SelectCategory';
import useMakeFlyer from '../hooks/useMakeFlyer';

const MakeFlyer = () => {
  const { category, form } = useMakeFlyer();

  return (
    <Container>
      <SelectCategory controller={category} />
      <FlyerForm controller={form} mobile={category} />
    </Container>
  );
};

export default MakeFlyer;

const Container = styled.div`
  display: flex;
`;
