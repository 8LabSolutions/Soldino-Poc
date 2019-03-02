import { connect } from 'react-redux';
import { logIn, logOut } from '../../actions/login';
import LogButton from '../presentational/LogButton';

const mapStateToProps = (state, ownProps) => {
  return {
    logged: state.logged
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logIn: (log) => {
      dispatch(logIn(log))
    },
    logOut: (log) => {
      dispatch(logOut(log))
    }
  }
}

const NotLogged = connect(mapStateToProps, mapDispatchToProps)(LogButton);


export default NotLogged