import React, {Component} from 'react';
import Button from "@material-ui/core/Button";

class GovButton extends Component {
  render() {
    let props = this.props;
      return (
        <div>
          <Button variant="contained" color="primary" onClick={props.mint}>mint</Button>
          <Button variant="contained" color="primary" onClick={props.distribute}>distribute</Button>
        </div>
      )
  }
}

export default GovButton;