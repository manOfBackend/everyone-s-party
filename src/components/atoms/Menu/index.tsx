import React from 'react';
import RowDivider from '../RowDivider';
import { MenuContainer, MenuSelectedLine, MenuText } from './style';

interface MenuProps {
  children: React.ReactNode;
  isSelected?: boolean;
}
const Menu = ({ children, isSelected = false }: MenuProps) => (
  <MenuContainer>
    <MenuText>
      {children}
    </MenuText>
    <RowDivider height="6px" />
    { isSelected && <MenuSelectedLine /> }
  </MenuContainer>
);

export default Menu;
