import React from 'react';
import ReactDOM from 'react-dom/client';
import DebugAtoms from '../jotai/debugs/DebugAtoms';
import { GlobalWebStyle } from '../styles/global';
import App from '../web/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DebugAtoms />
    <GlobalWebStyle />
    <App />
  </React.StrictMode>
);
