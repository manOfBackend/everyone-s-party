import React from 'react';
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Board from './pages/Board';

const App = () => (
  <ReactRouterRoutes>
    <Route path="/" element={<Board />} />
    {/* <Route path="*" element={<Navigate replace to="/board" />} /> */}
  </ReactRouterRoutes>
);

export default App;
