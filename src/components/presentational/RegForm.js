import React, {Component} from 'react';
import OutlinedTextFields from '../containers/OutlinedTextFields';


class RegForm extends Component {
  render() {
    let props = this.props
    if(props.logged === false){
      return (
        /*onClick={props.signUp}*/
        <OutlinedTextFields />
      )
    }else{
      return (
        <div>
          oook
        </div>
      )
    }
  }
}

export default RegForm;
