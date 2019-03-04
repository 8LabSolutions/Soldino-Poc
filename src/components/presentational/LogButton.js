import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import store from '../../store';

class LogButton extends Component {

  render() {
    var { logIn, logOut, logButtonText} = this.props
    var { logged } = store.getState()
    var logAction
    if (logged === false){
      logAction = logIn
    }
    else{
      logAction = logOut
    }

    return (
      <Button variant="contained" color="primary" onClick={logAction}>
        {logButtonText}
      </Button>
    )
  }
}

export default LogButton;
