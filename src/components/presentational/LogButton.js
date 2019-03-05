import React from 'react';
import { withRouter } from 'react-router-dom'
//import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import store from '../../store';
import { logIn, logOut } from '../../actions/login';

var text
var logged = store.getState()
if (logged===true){
  text = "LOGOUT"
}
else{
  text ="LOGIN"
}


// this also works with react-router-native

const LogButton = withRouter(({ history }) => (
  <Button
    type='button'
    onClick={() => {
      if(text==="LOGOUT"){
        logOut()
        text="LOGIN"
        history.push('/')
      }
      else{
        logIn()
        text="LOGOUT"
        history.push('/government')
      }

       }}
  >
    {text}
  </Button>
))

/*
const styles = {
  button: {
    backgroundColor: '#801336',
    color: 'white',
  },
};

class LogButton extends Component {

  render(){
    let props = this.props
    const { classes } = props;
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
      <Button className={classes.button} variant="contained" onClick={logAction}>
        {logButtonText}
      </Button>
    )
}
}

export default withStyles(styles)(LogButton);
*/
export default LogButton;
