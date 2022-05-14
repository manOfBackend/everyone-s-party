import React from 'react';
import { IntroTitleContainer } from './style';

const IntroTitle = () => (
  <IntroTitleContainer>
    {'더 '}
    <span className="text-green-800">저렴한</span>
    {', 더 '}
    <span className="text-green-800">간편한</span>
    {' 서비스'}
  </IntroTitleContainer>
);

export default IntroTitle;
