// src/js/actions/index.js
//import Web3 from 'web3'
import { LOGIN, LOGOUT } from "../constants/actionTypes";
import getWeb3 from '../utils/web_util';
import store from '../store/index'

export function logIn() {  
  return getWeb3().then( (value) => {  
  console.log(value)
   store.dispatch({
        type: LOGIN,
        par: true
      })
    },
    () => {
      store.dispatch({
          type: LOGIN,
          par: false
        })
    })
}

export function logOut() {
  return {
    type: LOGOUT,
    par: false
  };
}

