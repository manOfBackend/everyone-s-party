import React from 'react';
import { ButtonCTAStyled } from './style';

interface ButtonCTAProps {
  children: React.ReactNode;
}
const ButtonCTA = ({ children }: ButtonCTAProps) => (
  <ButtonCTAStyled height="50px" textSize="16px" width="231px">
    {children}
  </ButtonCTAStyled>
);

export default ButtonCTA;
