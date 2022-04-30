import React from 'react';
import {
  HeaderStyled, BottomLine, ButtonContainer, TopMenu,
} from './style';

interface HeaderProps {
  buttons: React.ReactNode[];
}

const Header = ({ buttons }: HeaderProps) => (
  <HeaderStyled>
    <TopMenu>
      <ButtonContainer>
        {buttons.map((Btn) => Btn)}
      </ButtonContainer>
    </TopMenu>
    <BottomLine />
  </HeaderStyled>
);

export default Header;
