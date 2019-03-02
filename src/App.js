import React, { Component } from 'react';
import ButtonAppBar from './components/containers/ButtonAppBar'
import PageContent from './components/containers/PageContent'
import store from './store/index'
import './styles/App.css';

//there is a distinction between logged and not logged user,
//if a user is not logged in, the initial guide along with
//the registration and login buttons will be displayed. On the
//other hand, if the user is logged in, there will be a distinction
//between citizen, business and government.

class App extends Component {
  state = {
    logged : store.getState().logged
  }

  render() {
    var {logged} = this.state
    console.log(logged)
    if (logged === false){
      //ritorno la pagina di gestione utente non loggato
      return (
        <div>
          <ButtonAppBar />
          <PageContent />
        </div>
      )
    }/* else {
      //ritorno la home page dell'utente loggato
      return (
        <ButtonAppBar />
      );
    }*/
  }
}

export default App;
