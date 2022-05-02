import Button from '@src/components/atoms/Button';
import Intro from '@src/components/molecules/Intro';
import Header from '@src/components/molecules/Header';
import React from 'react';

const Main = () => (
  <>
    <Header button={<Button>로그인</Button>} />
    <Intro />

  </>
);
export default Main;
