import { connect } from 'react-redux';
import {mint,distribute} from '../../actions/gov';
import GovButton from '../presentational/GovButton';

const mapStateToProps = (state) => {
  return {
    logged: state.logged
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
const Government = connect(mapStateToProps, mapDispatchToProps)(GovButton);


export default Government