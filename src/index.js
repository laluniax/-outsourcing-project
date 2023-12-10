import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from 'GlobalStyle';
import { Provider } from 'react-redux';
import getStore from 'redux/config/configStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaceContextProvider from 'context/PlaceContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const store = getStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PlaceContextProvider>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <App />
        <GlobalStyle />
        <ToastContainer />
      </Provider>
    </QueryClientProvider>
  </PlaceContextProvider>
);
