import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/index";
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//da rimuovere
window.store = store;

serviceWorker.register();
