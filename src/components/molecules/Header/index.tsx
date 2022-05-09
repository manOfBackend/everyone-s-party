import Button from '@src/components/atoms/Button';
import Menu from '@src/components/atoms/Menu';
import RowDivider from '@src/components/atoms/RowDivider';
import React, { memo } from 'react';
import { useLocation } from 'react-router';
import MenuBar from '../MenuBar';
import {
  BottomLine, ButtonContainer, HeaderStyled, HeaderWrapper, TopMenu,
} from './style';

interface ButtonInfo {
  text: string;
  onClick?: () => void;
}

interface MenuInfo {
  text: string;
  pathname: string;
}

const buttons: ButtonInfo[] = [{
  text: '로그인',
}];

const menus: MenuInfo[] = [{
  text: '홈',
  pathname: '/',
},
{
  text: '파티 추가',
  pathname: '/addParty',
},
{
  text: 'MY 파티',
  pathname: '/my-party',
},
{
  text: '가이드',
  pathname: '/guide',
},
];

const Header = () => {
  const location = useLocation();
  return (
    <HeaderStyled>
      <HeaderWrapper>
        <RowDivider height="16px" />
        <TopMenu>
          <ButtonContainer className="gap-10">
            {buttons.map((btn) => (
              <Button key={btn.text}>{btn.text}</Button>
            ))}
          </ButtonContainer>
        </TopMenu>
        <RowDivider height="20px" />
        <MenuBar>
          {menus.map((m) => (
            <Menu
              key={m.text}
              pathname={m.pathname}
              isSelected={location.pathname.startsWith(m.pathname)}
            >
              {m.text}
            </Menu>
          ))}
        </MenuBar>
      </HeaderWrapper>
      <BottomLine />
    </HeaderStyled>
  );
};

export default memo(Header);
