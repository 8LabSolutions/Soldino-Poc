import { connect } from 'react-redux';
import { logIn, logOut } from '../../actions/login';
import LogButton from '../presentational/LogButton';
import store from '../../store';

const mapStateToProps = (state) => {
  let { logged } = store.getState()
  var logButtonText
  if(logged === false)
    logButtonText = "LOGIN"
  else
    logButtonText = "LOGOUT"
  return {
    logged: state.logged,
    logButtonText: logButtonText
  }
}

const mapDispatchToProps = (dispatch) => {
  let { logged } = store.getState()
  var log
  console.log("mapDispatchToProps")
  if(logged === false)
    log = () => logIn()
  else
    log = () => dispatch(logOut())
  return {
    log: log
  }
}

const NotLogged = connect(mapStateToProps, mapDispatchToProps)(LogButton);

export default NotLogged
