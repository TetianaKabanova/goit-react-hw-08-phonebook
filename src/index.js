import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './components/styles/theme';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Spin } from 'antd';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<Spin />} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
          {''}
        </PersistGate>
      </Provider>
    </ThemeProvider>
    <ToastContainer />
  </React.StrictMode>
);
