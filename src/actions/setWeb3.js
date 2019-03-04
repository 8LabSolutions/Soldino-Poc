/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */
// src/js/actions/index.js
//import Web3 from 'web3'
import Web3 from 'web3'
import { SETWEB3 } from "../constants/actionTypes";
import store from '../store/index'


export default function setWeb3()  {
  return  new Promise(async (resolve, reject) => {
    var web3js
    if (typeof window.web3 !== 'undefined') {

      web3js = new Web3(window.web3.currentProvider)
      await window.ethereum.enable().then(()=>{
        var defaultAccount = window.web3.eth.defaultAccount
        web3js.defaultAccount = defaultAccount
      })
      store.dispatch({
        type: SETWEB3,
        instance: web3js
      })
      resolve()
    } else {
      console.log("no metamask")
          //web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:9545")).then(
        store.dispatch({
          type: SETWEB3,
          instance: null
        })
        reject()
    }
  })
}

