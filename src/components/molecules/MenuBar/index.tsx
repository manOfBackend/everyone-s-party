import ColumnDivider from '@src/components/atoms/ColumnDivider';
import React, { memo, useMemo } from 'react';

interface MenuBarProps {
  menus: React.ReactNode[];
}

const MenuBar = ({ menus }: MenuBarProps) => {
  const menusWithPadding = useMemo(() => {
    const result = [];

    for (let i = 0; i < menus.length; i += 1) {
      result.push(menus[i]);

      if (i !== menus.length - 1) {
        result.push(<ColumnDivider width="20px" />);
      }
    }
    return result;
  }, [menus]);
  return (
    <div className="flex">
            {...menusWithPadding}
    </div>
  );
};

export default memo(MenuBar);
