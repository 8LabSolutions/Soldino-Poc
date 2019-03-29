/* eslint-disable no-unused-vars */
/*import setWeb3 from './setWeb3'
import store from '../store/index'


export default function registerUserAction(email, addressB, VATNumber, name) {
  setWeb3().then(async ()  => {
    var { web3js } = store.getState()
    if(web3js !== null && web3js !== 'undefined') {
      var hexEmail = web3js.utils.asciiToHex(email,32)
      var hexName = web3js.utils.asciiToHex(email,32)
      var hexSede = web3js.utils.asciiToHex(email,32)
      var hexVat = web3js.utils.asciiToHex(email,32)
/*
      var net = await web3js.eth.net.getId()
      var abi = Proxy.abi
      var address = Proxy.networks[net].address

      const contract = new web3js.eth.Contract(abi, address)

      var alreadyRegistered = true
      console.log(contract)
      await contract.methods.upgradeTo(web3js.defaultAccount).call()
        .then(() => { console.log("Fatto upgrade") })


      if(alreadyRegistered === true) {
        contract.methods.register(web3js.defaultAccount, hexEmail, hexName, hexSede, hexVat).send({from: web3js.defaultAccount})
          .then(() => {alert("Sign up successful")})
      }
      else {
        alert("User already registered.")
      }
      */
     /*
    }
  })
}

*/
