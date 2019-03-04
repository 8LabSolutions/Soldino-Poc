// src/js/actions/index.js
//import Web3 from 'web3'
import { LOGIN, LOGOUT } from "../constants/actionTypes";
import store from '../store/index'
import setWeb3 from "./setWeb3";
import Accounts from '../contracts_build/Accounts'

export function logIn() {
  return setWeb3().then( () => {
    //must call the contract that checks if the user
    //is registered in the platform

    //// call del contratto ////
    var { web3js } = store.getState()
    //get the user address
    //var userAddress = web3js.defaultAccount
    //get the abi and deployment address of the contract
    var abi = Accounts["abi"]
    var contractAddress
    web3js.eth.getCoinbase(
      function(ris,err){
        if (!err)
          contractAddress = ris
      })
    //instance of the contract
    var contractInstance
    if (contractAddress !== "undefined"){
      contractInstance = web3js.eth.Contract(abi, contractAddress)
      //call the contract
      console.log(contractInstance)
      //contractInstance.methods.isRegistered(userAddress).call().then((ris)=>console.log(ris))
    }




    //// fine call del contratto ////



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
