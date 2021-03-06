import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps } from './config/firebaseConfig';
import store from './app/store';
import { ThemeProvider } from 'styled-components';
import Theme from '@Themes/native.theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
