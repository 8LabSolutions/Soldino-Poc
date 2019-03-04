import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/presentational/Home'
import Government from './components/containers/Government'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/government" component={Government} />
        </div>
      </Router>
    )
  }
}

export default App;
