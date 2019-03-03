import setWeb3 from './setWeb3'
import store from '../store/index'

export default function registerUserAction() {
  setWeb3().then(console.log(store.getState().web3js.eth.defaultAccount))
}/*.then(console.log(store.getState().web3js.eth.defaultAccount))*/

