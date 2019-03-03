import React, {Component} from 'react';
import Button from "@material-ui/core/Button";

class LogButton extends Component {
  render() {
    let props = this.props
    if(props.logged === false){
      return (
        <Button variant="contained" color="primary" onClick={props.logIn}>login</Button>
      )
    }else{
      return (
        <Button variant="contained" color="primary" onClick={props.logOut}>logout</Button>
      )
    }
  }
}

export default LogButton;
