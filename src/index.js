import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

// BrowserRouter,

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter hashType='slash'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
