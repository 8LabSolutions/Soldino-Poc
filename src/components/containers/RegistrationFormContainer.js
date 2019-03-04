
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import RegistrationForm from '../presentational/RegistrationForm'
import registerUserAction from '../../actions/registerUserAct';
import store from '../../store';

//TODO ritornare i campi dati da mostrare nel form (in un array)
const mapStateToProps = (state) => {
  var { userType } = store.getState()
  return {
    web3js: state.web3js
  }
}

const mapDispatchToProps = () => {
  return {
    registerBusiness: (email, address, VATNumber, name) => {
      registerUserAction(email, address, VATNumber, name) }
  }
}

const RegistrationFormContainer = connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)

export default RegistrationFormContainer
