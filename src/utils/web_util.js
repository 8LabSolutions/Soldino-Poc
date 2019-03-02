/* eslint-disable no-unused-vars */
import Web3 from 'web3'
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'
import Error from '../components/presentational/Error'
import { inflate } from 'zlib';
*/console

export default function getWeb3(){
  
  var web3js
  if (typeof web3 !== 'undefined') {
    web3js = new Web3(window.web3.currentProvider) 
    return window.ethereum.enable()
  } else {
    web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
  }
  //return web3js
}

/* esempio di chiamata a contratto
export const contratto = async (web3js) => {
  var abi = Example["abi"]
  var address = Example["networks"][await web3js.eth.net.getId()]["address"]
  var contract = web3js.eth.Contract(abi, address)
  console.log(contract)
  var ris = await contract.methods.getInstructor().call()
  console.log(ris)
}
*/

