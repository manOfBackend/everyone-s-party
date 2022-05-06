import People from '@src/assets/resource/people.svg';
import ButtonCTA from '@src/components/atoms/ButtonCTA';
import IntroTitle from '@src/components/atoms/IntroTitle';
import OTTIconBox from '@src/components/atoms/OTTIconBox';
import Slide from '@src/components/atoms/Slide';
import Header from '@src/components/molecules/Header';
import React from 'react';

const Main = () => (
  <>
    <Header />
    <div className="text-4xl flex flex-col items-center bg-gradient-to-b from-white to-cyan-200 h-screen w-screen justify-center gap-20 mt-20 pb-20">
      <OTTIconBox />
      <IntroTitle />
      <People />
      <Slide />
      <ButtonCTA>
        시작하기
      </ButtonCTA>
    </div>
  </>
);
export default Main;
