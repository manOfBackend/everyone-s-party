import ColumnDivider from '@src/components/atoms/ColumnDivider';
import Menu from '@src/components/atoms/Menu';
import RowDivider from '@src/components/atoms/RowDivider';
import React, { useMemo } from 'react';
import MenuBar from '../MenuBar';
import {
  HeaderStyled, BottomLine, ButtonContainer, TopMenu, HeaderWrapper,
} from './style';

interface HeaderProps {
  button: React.ReactNode;
}

const Header = ({ button }: HeaderProps) => (
  <HeaderStyled>
    <HeaderWrapper>
      <RowDivider height="16px" />
      <TopMenu>
        <ButtonContainer className="gap-10">
          {button}
        </ButtonContainer>
      </TopMenu>
      <RowDivider height="20px" />
      <MenuBar menus={[
        <Menu isSelected>홈</Menu>,
        <Menu>파티 추가</Menu>,
        <Menu>MY 파티</Menu>,
        <Menu>가이드</Menu>]}
      />
    </HeaderWrapper>
    <BottomLine />
  </HeaderStyled>
);

export default Header;
