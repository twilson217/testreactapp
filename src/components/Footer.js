import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.footerBackground};
  padding: 10px;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const Footer = () => (
  <FooterContainer>
    <p>Some Footer Here</p>
  </FooterContainer>
);

export default Footer;
