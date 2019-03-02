// src/js/actions/index.js
//import Web3 from 'web3'
import { LOGIN, LOGOUT } from "../constants/actionTypes";
//import getWeb3 from '../utils/web_util';


export function logIn() {
  return {
    type: LOGIN,
    par: true
  }
}

export function logOut() {
  return {
    type: LOGOUT,
    par: false
  };
}

