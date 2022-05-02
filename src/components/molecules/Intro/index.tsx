import RowDivider from '@src/components/atoms/RowDivider';
import Slide from '@src/components/atoms/Slide';
import React from 'react';
import IntroTitle from '../../atoms/IntroTitle';
import { IntroContainer } from './style';

const Intro = () => (
  <IntroContainer className="text-4xl">
    <RowDivider height="70px" />
    <IntroTitle />
    <RowDivider height="70px" />
    <Slide />
  </IntroContainer>
);

export default Intro;
