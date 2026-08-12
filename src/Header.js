import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 20px 0;
`;

const Name = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0;
`;

function Header() {
  return (
    <HeaderContainer>
      <Name>Elton Chun-Chai, LI</Name>
      <Title>MPhil student in Computer Science @ HKUST</Title>
    </HeaderContainer>
  );
}

export default Header;