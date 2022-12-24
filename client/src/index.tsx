import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import LoginContextProvider from './Contexts/Login.context';
import SignUpContextProvider from './Contexts/Signup.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <SignUpContextProvider>
        <App />
      </SignUpContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);
