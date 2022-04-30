import Button from '@src/components/atoms/Button';
import Header from '@src/components/molecules/Header';
import React from 'react';

const Main = () => (
  <Header buttons={[
    <Button>로그인</Button>,
  ]}
  />
);

export default Main;
