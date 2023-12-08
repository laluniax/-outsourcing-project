import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from 'GlobalStyle';
import { Provider } from 'react-redux';
import getStore from 'redux/config/configStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaceContextProvider from 'context/PlaceContext';

const store = getStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PlaceContextProvider>
    <Provider store={store}>
      <App />
      <GlobalStyle />
      <ToastContainer />
    </Provider>
  </PlaceContextProvider>
);
