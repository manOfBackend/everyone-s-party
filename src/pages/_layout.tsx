import { Global, ThemeProvider } from '@emotion/react';
import theme from '@src/App.style';
import Header from '@src/components/molecules/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Layout = () => (
  <>
    <ToastContainer position="top-center" autoClose={5000} />
    <ThemeProvider theme={theme}>
      <Global
        styles={[
          {
            '@font-face': {
              fontFamily: 'OTWelcomeBA',
              src: 'url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/OTWelcomeBA.woff2") format("woff2")',
              fontWeight: 'normal',
              fontStyle: 'normal',
            },
          },
          {
            '*': {
              fontFamily: 'OTWelcomeBA',
            },
          },
          {
            body: {
              backgroundImage: 'linear-gradient(to bottom, #fff, #a5f3fc)',
            },
          },
          {
            '.content-root': {
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              width: '100vw',
              alignItems: 'center',
            },
          },
        ]}
      />
      <Header />
      <Suspense fallback="loading...">
        <div className="content-root">
          <Outlet />
        </div>
      </Suspense>
    </ThemeProvider>
  </>
);

export default Layout;
