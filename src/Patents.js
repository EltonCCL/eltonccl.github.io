import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Card = styled.div`
  border-radius: 18px;
  padding: 0px 0px 16px 0px;
`;

function Patents() {
  return (
    <Container>
      <Title>Patents</Title>
      <Card>
      to be continued...
      </Card>
    </Container>
  );
}

export default Patents;