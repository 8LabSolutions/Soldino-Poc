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
      mint: () => {
        dispatch(mint())
      },
      distribute: () => {
        dispatch(distribute())
      }
    }
}
const Government = connect(mapStateToProps, mapDispatchToProps)(GovPage);


export default Government
