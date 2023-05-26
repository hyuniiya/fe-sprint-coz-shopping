import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux store

import App from '../../App.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
 
document.getElementById('root')
);