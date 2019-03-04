/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
//import NavContainer from '../containers/NavContainer'
import RegistrationFormContainer from '../containers/RegistrationFormContainer'
import ButtonAppBar from './ButtonAppBar';


class Home extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <RegistrationFormContainer />
      </div>
    )
  }
}

export default Home




