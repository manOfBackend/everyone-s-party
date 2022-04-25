import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import App from './App';
import { history, Store } from './Redux';
import './index.css';
import serviceWorker from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
  serviceWorker.start({ onUnhandledRequest: 'bypass' });
}

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <Provider store={Store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
);
