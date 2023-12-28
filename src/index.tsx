/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/default */
import React from 'react';
import ReactDOM from 'react-dom/client';

import { worker } from 'mocks/browser';

import App from './App';

import './index.css';

if (process.env.REACT_APP_MSW === 'on') {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
