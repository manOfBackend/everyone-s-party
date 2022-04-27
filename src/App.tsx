import React from 'react';
import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Board from '@pages/Board';
import Login from '@pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <>
    <ToastContainer
      position="top-center"
      autoClose={5000}
    />
    <ReactRouterRoutes>
      <Route path="/" element={<Board />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </ReactRouterRoutes>
  </>
);

export default App;
