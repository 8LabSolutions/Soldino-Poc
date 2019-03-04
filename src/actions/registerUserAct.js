/* eslint-disable no-unused-vars */
import setWeb3 from './setWeb3'
import store from '../store/index'
import  Accounts  from '../contracts_build/Accounts';

export default function registerUserAction(email, addressB, VATNumber, name) {
  setWeb3().then(async ()  => {
    var { web3js } = store.getState()
    if(web3js !== null && web3js !== 'undefined') {
      var hexEmail = web3js.utils.asciiToHex(email,32)
      var net = window.web3.version.network
      var abi = Accounts.abi
    // console.log(web3js.eth.net.getId())
      //console.log(netId)
      var address = Accounts.networks[net].address
      const contract = new web3js.eth.Contract(abi, address)
      var alreadyRegistered = false

      await contract.methods.isRegistered(web3js.defaultAccount).call()
        .then((value) => { alreadyRegistered = value })

      if(alreadyRegistered === false) {
        contract.methods.register(web3js.defaultAccount, hexEmail).send({from: web3js.defaultAccount})
      }
      else {
        alert("User already registered.")
      }
    }
  })
}

