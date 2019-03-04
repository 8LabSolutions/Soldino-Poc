import React, {Component} from 'react';
import Government from '../containers/Government';

class GovForm extends Component {
  render() {
    let props = this.props
    if(props.logged === false){
      return (
        /*onClick={props.signUp}*/
        // eslint-disable-next-line react/no-unescaped-entities
        <div>Errore, procedere con l'autenticazione </div>
      )
    }else{
      return (
          //classname error da modificare(è solo per la prova)
        <Government />
      )
    }
  }
}

export default GovForm;
