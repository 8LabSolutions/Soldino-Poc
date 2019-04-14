/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import Button from '../presentational/Button';
import { cartToOrders } from '../../actions/cart';
import user from "../../facade/user"
import { getTodayDate, getVAT, getNet } from '../../auxiliaryFunctions';
import { store } from '../../store';

const mapDispatchToProps = (dispatch) => {
  return {
    action: (order) => {
      //order[0]: products in cart
      //order[1]: address
      console.log('----!!!----')
      console.log(order)
      console.log('----!!!----')
      var cart = {
        products: order[0],
        date: getTodayDate(),
        VAT: getVAT(order[0]),
        net: getNet(order[0]),
        address: order[1],
        buyerName: store.getState().user.name,
        buyerDetails: store.getState().user.surname,
      }
      user.buy(cart).then(()=>{
        dispatch(cartToOrders(order[0], order[1]))
      })

    }
  }
}

const ButtonCheckout = connect(null, mapDispatchToProps)(Button);

export default ButtonCheckout;
