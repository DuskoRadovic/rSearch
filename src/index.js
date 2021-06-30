import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/index'
import { Provider } from 'react-redux';
import { GlobalStyle } from './globalStyle/globalStyles.js'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


