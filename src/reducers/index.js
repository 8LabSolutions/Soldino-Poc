import { LOGIN, LOGOUT, SETWEB3 } from "../constants/actionTypes";


const initialState = {
  logged: true,
  web3js: null
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
  return state;
}

export default rootReducer;
