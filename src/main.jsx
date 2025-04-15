import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './states/index.js';
import Loading from './components/general/Loading';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Loading />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
