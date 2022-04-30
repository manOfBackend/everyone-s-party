import React from 'react';
import { ButtonStyled } from './style';

interface ButtonProps {
  children: React.ReactNode;
}
const Button = ({ children }: ButtonProps) => (
  <ButtonStyled>
    {children}
  </ButtonStyled>
);

export default Button;
