import React, {Component} from 'react';
import Button from "@material-ui/core/Button";

class LogButton extends Component {
  render() {
    var {log, logButtonText } = this.props
    return (
      <Button variant="contained" color="primary" onClick={log}>
        {logButtonText}
      </Button>
    )
  }
}

export default LogButton;
