import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from './global/styles/style';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RoutesApp from './routes/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <ToastContainer />
    <GlobalStyle />
    <RoutesApp />
  </React.StrictMode>
);