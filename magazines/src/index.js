import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';

import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  globalThis.document.getElementById('root'),
);

reportWebVitals();
