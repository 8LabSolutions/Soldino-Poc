import Web3 from 'web3'

var truffle = require('../truffle-config')

const port = truffle.networks.coverage.port;

export default function getWeb3(){
  var web3js;
  if (typeof web3 !== 'undefined' && typeof window != 'undefined') {
    web3js = new Web3(window.web3.currentProvider);
    return window.ethereum.enable();
  } else {
    web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:"+port+""));
  }
  return web3js;
}
