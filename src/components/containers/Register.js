import { connect } from 'react-redux';
import RegForm from '../presentational/RegForm';

const mapStateToProps = (state) => {
  return {
    logged: state.logged
  }
}

const Register = connect(mapStateToProps, null)(RegForm);


export default Register