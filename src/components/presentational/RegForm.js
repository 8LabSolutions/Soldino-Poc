import React, {Component} from 'react';
import OutlinedTextFields from '../containers/OutlinedTextFields';


class RegForm extends Component {
  render() {
    let props = this.props
    if(props.logged === false){
      return (
        /*onClick={props.signUp}*/
        <center> 
          <OutlinedTextFields />
        </center>
      )
    }else{
      return (
        <div />
      )
    }
  }
}

export default RegForm;
