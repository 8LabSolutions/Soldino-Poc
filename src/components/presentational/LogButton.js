import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import store from '../../store';

const styles = {
  button: {
    backgroundColor: '#801336',
    color: 'white',
  },
};

class LogButton extends Component {
  render() {
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
