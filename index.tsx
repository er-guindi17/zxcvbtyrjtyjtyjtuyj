import React from 'react';
import ReactDOM from 'react-dom/client';
// FIX: Explicitly specify file extension to ensure module is found.
import App from './App.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
