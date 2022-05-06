import React from 'react';
import RowDivider from '../RowDivider';
import { MenuContainer, MenuSelectedLine, MenuText } from './style';

interface MenuProps {
  children: React.ReactNode;
  isSelected?: boolean;
  pathname: string;
}
const Menu = ({ children, isSelected = false, pathname }: MenuProps) => (
  <MenuContainer>
    <MenuText isSelected={isSelected}>
      <a href={pathname}>
        {children}
      </a>
    </MenuText>
    <RowDivider height="6px" />
    { isSelected && <MenuSelectedLine /> }
  </MenuContainer>
);

export default Menu;
