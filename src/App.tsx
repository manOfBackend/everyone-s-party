import React from 'react';
import { useRoutes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import routes from './routes';

const App = () => {
  const rs = useRoutes(routes);
  return (
    <div>
      {rs}
    </div>
  );
};

export default App;
