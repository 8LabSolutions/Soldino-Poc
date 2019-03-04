/* eslint-disable no-unused-vars */
import setWeb3 from './setWeb3'
import store from '../store/index'
import  Accounts  from '../contracts_build/Accounts';

export default function registerUserAction(email, addressB, VATNumber, name) {
  setWeb3().then(()  => {
    var { web3js }= store.getState()
    if(web3js !== null && web3js !== 'undefined') {
      var hexEmail = web3js.utils.asciiToHex(email,32)
      var abi = Accounts["abi"]
      //console.log(await web3.eth.net.getId())
      var net = window.web3.version.network
      var address = Accounts["networks"][net]["address"]
      var contract = web3js.eth.Contract(abi, address)
      console.log(address)
      //contract.methods.register(web3js.defaultAccount, hexEmail).send({from: web3js.defaultAccount})

    }
  })

}/*.then(console.log(store.getState().web3js.eth.defaultAccount))*/

