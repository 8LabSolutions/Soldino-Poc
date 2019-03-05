import { LOGIN, LOGOUT, SETWEB3, TOKEN } from "../constants/actionTypes";


const initialState = {
  logged: false,
  web3js: null,
  tokenSymbol:''
};
function rootReducer(state = initialState, action) {
  if (action.type === LOGIN || action.type === LOGOUT) {
    return Object.assign({}, state, {
      logged: action.par
    });
  }
  if(action.type === SETWEB3) {
    return Object.assign({}, state, {
      web3js: action.instance
    });
  }
  if(action.type === TOKEN) {
    return Object.assign({}, state, {
      tokenSymbol: action.tokenSymbol
    });
  }
  return state;
}

export default rootReducer;
