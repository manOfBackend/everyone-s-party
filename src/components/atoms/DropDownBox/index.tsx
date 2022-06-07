import React, { useState } from 'react';

import IconRocket from '@src/assets/resource/Rocket.png';
import IconUp from '@src/assets/resource/up.png';
import IconDown from '@src/assets/resource/down.png';
import { DropBodyGrayBox } from './style';

interface DropDownBoxProps {
  header: React.ReactNode;
  icon?: React.ReactNode;
  downBody: React.ReactNode;
}
const DropDownBox = ({ header, icon, downBody }: DropDownBoxProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center cursor-pointer py-5"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <img className="mr-3" width={25} height={25} alt="rocket" src={icon || IconRocket} />
        {header}
        <div className="ml-auto">
          {showDropdown ? (
            <img width={25} height={25} alt="down" src={IconDown} />
          ) : (
            <img width={25} height={25} alt="up" src={IconUp} />
          )}
        </div>
      </button>
      {!showDropdown && <DropBodyGrayBox>{downBody}</DropBodyGrayBox>}
    </div>
  );
};

export default DropDownBox;
