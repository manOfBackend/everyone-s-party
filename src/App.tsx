import React from 'react';
import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Board from '@pages/Board';
import Login from '@pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@emotion/react';
import theme from './App.style';
import Main from './pages/Main';

const App = () => (
  <>
    <ToastContainer
      position="top-center"
      autoClose={5000}
    />
    <ThemeProvider theme={theme}>
      <ReactRouterRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </ReactRouterRoutes>
    </ThemeProvider>
  </>
);

export default App;
