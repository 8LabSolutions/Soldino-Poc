// src/js/actions/index.js
//import Web3 from 'web3'
import { LOGIN, LOGOUT } from "../constants/actionTypes";
import getWeb3 from '../utils/web_util';


export function logIn() {
    console.log(getWeb3())
    getWeb3()
    .then( () => {
    console.log("successo")
    return {
        type: LOGIN,
        par: true
      };
  },
  () => {
    return {
        type: LOGIN,
        par: false
      };
  })
  
}

export function logOut() {
  return {
    type: LOGOUT,
    par: false
  };
}

