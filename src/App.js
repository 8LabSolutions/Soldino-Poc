import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeContainer from './components/presentational/Home'
import Altro from './components/containers/Altro'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/altro" component={Altro} />
        </div>
      </Router>
    )
  }
}

export default App;
