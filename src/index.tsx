import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './components/Store/Store';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
