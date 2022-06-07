import React from 'react';
import { Navigate } from 'react-router';
import AddParty from './pages/AddParty';
import Login from './pages/Login';
import Main from './pages/Main';
import Signup from './pages/Signup';
import GlobalLayout from './pages/_layout';
import Guide from './pages/Guide';

const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Main />, index: true },
      { path: '/login', element: <Login />, index: true },
      { path: '/signup', element: <Signup />, index: true },
      { path: '/add-party', element: <AddParty />, index: true },
      { path: '/guide', element: <Guide />, index: true },
      { path: '/', element: <Navigate replace to="/" />, index: true },
    ],
  },
];

export default routes;
