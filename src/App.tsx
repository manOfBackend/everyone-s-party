import React from 'react';
import { useRoutes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import routes from './routes';

const App = () => {
  const rs = useRoutes(routes);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {rs}
    </>
  );
};

export default App;
