import React, { useCallback, useState } from 'react';
import IconNetflix from '@src/assets/resource/icon_netflix.png';
import IconDisney from '@src/assets/resource/icon_disney.png';
import IconLaftel from '@src/assets/resource/icon_laftel.png';
import IconTving from '@src/assets/resource/icon_tving.png';
import IconWavve from '@src/assets/resource/icon_wavve.png';
import IconWatcha from '@src/assets/resource/icon_watcha.png';
import OTTBox from './styles/OTTBox';

type IconKind = 'netflix' | 'tving' | 'disney' | 'laftel' | 'watcha' | 'wavve';
type IconType = { text: string; icon: any; isAvailableMatchingImmediately?: boolean };
type LogoMapType = Record<IconKind, IconType>;
const logoMap: LogoMapType = {
  netflix: {
    text: '넷플릭스',
    icon: IconNetflix,
    isAvailableMatchingImmediately: true,
  },
  tving: {
    text: '티빙',
    icon: IconTving,
  },
  disney: {
    text: '디즈니',
    icon: IconDisney,
  },
  laftel: {
    text: '라프텔',
    icon: IconLaftel,
  },
  watcha: {
    text: '왓챠',
    icon: IconWatcha,
  },
  wavve: {
    text: '웨이브',
    icon: IconWavve,
  },
};

const SelectOTTBox = () => {
  const [clicked, setClicked] = useState<IconKind>();

  const handleClickOTTBox = useCallback((icon: IconKind) => () => {
    setClicked(icon);
  }, []);

  return (

    <div className="flex flex-col justify-center gap-7 py-5 px-5 rounded-xl bg-white w-full max-w-4/5 shadow-2xl">
      <h4 className="font-bold">보고 싶은 OTT를 선택해주세요.</h4>
      <div className="flex gap-2 flex-wrap justify-between w-full">
        {Object.entries(logoMap).map(([name, { text, icon, isAvailableMatchingImmediately }]) => (
          <OTTBox
            clicked={clicked === name}
            imgElement={<img alt={name} src={icon} width={44} height={44} />}
            isAvailableMatchingImmediately={isAvailableMatchingImmediately}
            onClick={handleClickOTTBox(name as IconKind)}
            text={text}
          />
        ))}
      </div>
    </div>
  );
};
export default SelectOTTBox;
