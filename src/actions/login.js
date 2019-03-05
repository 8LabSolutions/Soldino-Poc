// src/js/actions/index.js
//import Web3 from 'web3'

import { LOGIN, LOGOUT } from "../constants/actionTypes";
import store from '../store/index'
import setWeb3 from "./setWeb3";
import Accounts from '../contracts_build/Accounts'


export function logIn() {
  setWeb3().then(async ()  => {
    var { web3js } = store.getState()
    if(web3js !== null && web3js !== 'undefined') {

      var net = await web3js.eth.net.getId()
      var abi = Accounts.abi
      var address = Accounts.networks[net].address

      const contract = new web3js.eth.Contract(abi, address)

      var alreadyRegistered = false

      await contract.methods.isRegistered(web3js.defaultAccount).call()
        .then((value) => { alreadyRegistered = value })

      if(alreadyRegistered === true) {
        store.dispatch({
          type: LOGIN,
          par: true
        })
      }
      else {
        alert("It seems like you are not registered")
      }
    }
  })

    //// fine call del contratto ////

}

export function logOut() {
  return {
    type: LOGOUT,
    par: false
  };
}


export function changeLog() {
  var { logged } = store.getState()
  if (logged === false){
    return setWeb3().then( () => {
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
  else{
    return {
      type: LOGOUT,
      par: false
    };
  }
}
