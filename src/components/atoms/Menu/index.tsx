import React from 'react';
import RowDivider from '../RowDivider';
import { MenuContainer, MenuSelectedLine, MenuText } from './style';

interface MenuProps {
  title: string;
  isSelected: boolean;
}
const Menu = ({ title, isSelected }: MenuProps) => (
  <MenuContainer>
    <MenuText>
      {title}
    </MenuText>
    <RowDivider height="6px" />
    { isSelected && <MenuSelectedLine /> }
  </MenuContainer>
);

export default Menu;
