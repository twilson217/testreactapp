import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.headerBackground};
  padding: 20px;
  text-align: center;
`;

const Header = () => (
  <HeaderContainer>
    <h1>Developer Portfolio</h1>
  </HeaderContainer>
);

export default Header;
