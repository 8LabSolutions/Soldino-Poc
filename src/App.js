import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/presentational/Home'
import GovPageContainer from './components/containers/GovPageContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/government" component={GovPageContainer} />
        </div>
      </Router>
    )
  }
}

export default App;
