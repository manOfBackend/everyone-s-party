import ColumnDivider from '@src/components/atoms/ColumnDivider';
import React, { memo, Children } from 'react';

interface MenuBarProps {
  children: React.ReactNode;
}

const MenuBar = ({ children }: MenuBarProps) => (
  <div className="flex">
    {Children.map(children, (child) => (
      <>
        <ColumnDivider width="20px" />
        {child}
      </>
    ))}
  </div>
);

export default memo(MenuBar);
