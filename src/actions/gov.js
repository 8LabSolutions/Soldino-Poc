// src/js/actions/index.js
//import Web3 from 'web3'
import { MINT, DISTRIBUTE } from "../constants/actionTypes";
import setWeb3 from "./setWeb3";
import store from '../store/index'
import TokenERC20 from '../contracts_build/TokenERC20';
//import getWeb3 from '../utils/web_util';


export function mint(addressTo, ammount) {
  setWeb3().then(async ()  => {
    var { web3js } = store.getState()
    if(web3js !== null && web3js !== 'undefined') {
      var net = await web3js.eth.net.getId()
      var abi = TokenERC20.abi
      var address = TokenERC20.networks[net].address

      const contract = new web3js.eth.Contract(abi, address)
      console.log(address)
      var ownerAddress

      await contract.methods.getOwner().call().then((value) => {
        ownerAddress = value
      })

      console.log("D: "+web3js.defaultAccount)
      console.log("O: "+ownerAddress)
      if(web3js.defaultAccount !== ownerAddress.toLowerCase()) {
        alert("Permission denied")
      }
      else {
        await contract.methods.mintToken(addressTo.toLowerCase(), parseInt(ammount)).send({from: web3js.defaultAccount}).then(() => {
          contract.methods.transfer(addressTo.toLowerCase(), parseInt(ammount)).send({from: web3js.defaultAccount}).then(() => {console.log("Evviva.")
        })
        }, () => {alert("Error")})
      }
    }

  })
  return {
    type: MINT,
    par: true
  }
}

export function distribute(address, ammount) {
 // eslint-disable-next-line no-unused-vars
 var b = address
  // eslint-disable-next-line no-unused-vars
  var a = ammount
  return {
    type: DISTRIBUTE,
    par: false
  };
}
