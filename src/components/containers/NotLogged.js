import { connect } from 'react-redux';
import { logIn, logOut } from '../../actions/login';
import LogButton from '../presentational/LogButton';

const mapStateToProps = (state) => {
  return {
    logged: state.logged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => {
      logIn()
    },
    logOut: () => {
      dispatch(logOut())
    }
  }
}

const NotLogged = connect(mapStateToProps, mapDispatchToProps)(LogButton);

export default NotLogged
