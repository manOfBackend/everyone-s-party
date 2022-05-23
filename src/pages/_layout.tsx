import { ThemeProvider } from '@emotion/react';
import theme from '@src/App.style';
import Header from '@src/components/molecules/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './_globalStyle';

const Layout = () => (
  <>
    <ToastContainer position="top-center" autoClose={5000} />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
