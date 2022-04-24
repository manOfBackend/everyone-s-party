import React from 'react';
import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Board from './pages/Board';
import Login from './pages/Login';

const App = () => (
  <ReactRouterRoutes>
    <Route path="/" element={<Board />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </ReactRouterRoutes>
);

export default App;
