import React, {Component} from 'react';
import Logged from '../containers/Logged'

class LogButton extends Component {
  render() {
    let props = this.props
    if(props.logged === false){
      return (
        <button type="button" onClick={props.logIn}>login</button>
      )
    }else{
      return (
        <div>
          <button type="button" onClick={props.logOut}>logout</button>
          <Logged />
        </div>
      )
    }
  }
}

export default LogButton;
