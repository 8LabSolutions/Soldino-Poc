import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/index";
import App from './App';
import setWeb3 from './actions/setWeb3';


//the App is rendered
setWeb3()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//da rimuovere
window.store = store;
