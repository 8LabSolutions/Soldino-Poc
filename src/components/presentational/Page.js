import React, {Component} from 'react';
import Register from '../containers/Register';

class Page extends Component {
  render() {
    let props = this.props
    if(props.logged === false){
      return (
        <div><Register /></div>
      )
    }else{
      return (
        <center><h1>Coming soon</h1></center>
      )
    }
  }
}

export default Page;