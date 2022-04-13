import React from "react"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './pages/Home'
import NotFound from './components/NotFound'

class App extends React.Component {
  render () {
    return (
      <>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App
