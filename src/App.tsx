import React from 'react';
import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Login from '@pages/Login';
import Signup from '@pages/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Global, ThemeProvider } from '@emotion/react';
import theme from './App.style';
import Main from './pages/Main';

const App = () => (
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
        ]}
      />
      <ReactRouterRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </ReactRouterRoutes>
    </ThemeProvider>
  </>
);

export default App;
