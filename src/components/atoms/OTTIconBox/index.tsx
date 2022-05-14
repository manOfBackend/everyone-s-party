import React from 'react';
import IconDisney from '@src/assets/resource/icon_disney.png';
import IconLaftel from '@src/assets/resource/icon_laftel.png';
import IconNetflix from '@src/assets/resource/icon_netflix.png';
import IconTving from '@src/assets/resource/icon_tving.png';
import IconWavve from '@src/assets/resource/icon_wavve.png';

const OTTIconBox = () => (
  <div className="flex gap-7">
    <img alt="tving" src={IconTving} />
    <img alt="netflix" src={IconNetflix} />
    <img alt="wavve" src={IconWavve} />
    <img alt="laftel" src={IconLaftel} />
    <img alt="disney" src={IconDisney} />
  </div>
);

export default OTTIconBox;
