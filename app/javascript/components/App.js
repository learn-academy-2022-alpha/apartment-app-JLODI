import React from "react"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './pages/Home'

class App extends React.Component {
  render () {
    return (
      <>
            <Home />
      </>
    );
  }
}

export default App