/* eslint-disable max-len */
import React from 'react';
import { ButtonCTAStyled } from './style';

interface ButtonCTAProps {
  children: React.ReactNode;
  height?: string;
  textSize?: string;
  width?: string;
  btnColor?: string;
  textColor?: string;
  handleSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
  onClick?: (e?:React.DOMAttributes<HTMLButtonElement>)=>void;
  type?: 'button' | 'submit' | 'reset';
}
const ButtonCTA = ({
  children, height = '50px', textSize = '16px', width, btnColor, textColor, handleSubmit, onClick, type,
}: ButtonCTAProps) => (
  <ButtonCTAStyled
    type={type}
    onSubmit={() => type === 'submit' && handleSubmit && handleSubmit()}
    onClick={() => onClick && onClick()}
    height={height}
    textSize={textSize}
    width={width}
    btnColor={btnColor}
    textColor={textColor}
  >
    {children}
  </ButtonCTAStyled>
);

export default ButtonCTA;
