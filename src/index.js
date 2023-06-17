import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    text: '#212121',
    acentText: '#6a85b5e8',
    white: 'white',
    backgroundColor: '#2EE59D',
    backgroundInput: '#f6f6f6',
    message: 'red',
    backgroundBtn: '#889ec5e8',
    backgroundBtnHover: '#657da8fa',
  },
  boxShadow: '0 8px 15px rgba(0, 0, 0, .1);',
  boxShadowBtn: '0 4px 0 #6a85b5e8;',
  boxShadowHover: '0 15px 20px rgba(46, 229, 157, .4);',
  border: '1px solid #fff',
  borderInput: '1px solid #cecece',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
