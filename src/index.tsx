import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Main from './containers/Main';
import * as serviceWorker from './serviceWorker';

import './assets/styles/index.css';
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, 
  document.getElementById('root'));

serviceWorker.unregister();
