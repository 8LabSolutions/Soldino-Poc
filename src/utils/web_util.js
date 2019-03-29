/* eslint-disable no-unused-vars */
import Web3 from 'web3'
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'
import Error from '../components/presentational/Error'
import { inflate } from 'zlib';
*/

export default function getWeb3(){
  var web3js;
  if (typeof web3 !== 'undefined' && typeof window != 'undefined') {
    web3js = new Web3(window.web3.currentProvider);
    return window.ethereum.enable();
  } else {
    web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
  }
  return web3js;
}
