import { TOKEN } from "../constants/actionTypes";
import store from '../store/index'
import setWeb3 from "./setWeb3";

import TokenERC20 from '../contracts_build/TokenERC20';

export default function TokenInfo() {
    setWeb3().then(async () => {
        var { web3js } = store.getState()
        var net = await web3js.eth.net.getId()
        var abi = TokenERC20.abi
        var address = TokenERC20.networks[net].address

        const contract = new web3js.eth.Contract(abi, address)

        contract.methods.symbol().call()
            .then((value) => {
                store.dispatch({
                    type: TOKEN,
                    tokenSymbol: value
                })
            })
    })
}