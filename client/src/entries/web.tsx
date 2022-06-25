import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalWebStyle } from '../styles/global';
import App from '../web/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalWebStyle />
    <App />
  </React.StrictMode>
);
