import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import UserContextProvider from './Contexts/Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextProvider name={''} >
      <App />
      </UserContextProvider>
  </React.StrictMode>
);
