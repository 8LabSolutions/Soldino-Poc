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
  mapDispatchToProps()
  return {
    logged: state.logged,
    logButtonText: logButtonText
  }

}

const mapDispatchToProps = (dispatch) => {
  return{
    logIn: () => {logIn()},
    logOut: () => {dispatch(logOut())}
  }


}


const NotLogged = connect(mapStateToProps, mapDispatchToProps)(LogButton);

export default NotLogged
