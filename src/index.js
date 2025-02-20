import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { ThemeContextProvider } from './components/Context/Context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);