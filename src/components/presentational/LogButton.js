import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const styles = {
  button: {
    backgroundColor: '#801336',
    color: 'white',
  },
};

class LogButton extends Component {
  render() {
    let props = this.props
    const {classes} = props;
    var {log, logButtonText } = this.props

    return (
      <Button className={classes.button} variant="contained" onClick={log}>
        {logButtonText}
      </Button>
    )
  }
}

export default withStyles(styles)(LogButton);
