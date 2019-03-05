import { connect } from 'react-redux';
import {mint,distribute} from '../../actions/gov';
import GovPage from '../presentational/GovPage';

const mapStateToProps = (state) => {
  return {
    logged: state.logged,
    balance: state.balance
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      mint: (address, ammount) => {
        dispatch(mint(address, ammount))
      },
      distribute: (address, ammount) => {
        dispatch(distribute(address, ammount))
      }
    }
}
const Government = connect(mapStateToProps, mapDispatchToProps)(GovPage);


export default Government
