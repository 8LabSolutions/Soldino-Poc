// src/js/actions/index.js
//import Web3 from 'web3'
import { MINT, DISTRIBUTE } from "../constants/actionTypes";
//import getWeb3 from '../utils/web_util';


export function mint() {
  return {
    type: MINT,
    par: true
  }
}

export function distribute() {
  return {
    type: DISTRIBUTE,
    par: false
  };
}