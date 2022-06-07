import { Global } from '@emotion/react';
import React from 'react';

const GlobalStyle = () => (
  <Global
    styles={[
      {
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        },
      },
      {
        body: {
          backgroundImage: 'linear-gradient(to bottom, #fff, #a5f3fc)',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          minHeight: '100vh',
          width: '100vw',
          margin: '0px',
          padding: '0px',
        },
      },
      {
        div: {
          boxSizing: 'border-box',
        },
      },
      {
        '.content-root': {
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '640px',
          width: '100%',
        },
      },
    ]}
  />
);

export default GlobalStyle;
