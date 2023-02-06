import React from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from '@reduxjs/toolkit';
import { store } from './store';

import App from './App';
import '../../styles/css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
