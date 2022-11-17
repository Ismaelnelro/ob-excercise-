import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppReduxSaga from './AppReduxSaga';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createAppStore, createAppAsyncStore } from './store/config/storeConfig'
 
// let appStore = createAppStore()
let appAsyncStore = createAppAsyncStore()

ReactDOM.render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
      {/* <App /> */}
      <AppReduxSaga />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
