import React from "react"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './pages/Home'
import NotFound from './components/NotFound'
import ApartmentIndex from './pages/ApartmentIndex'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }
  
  componentDidMount(){
    this.readApart()
    console.log(this.state)
  }
  
  readApart = () => {
    fetch("http://localhost:3000/apartments")
    .then(response => response.json())
    // set the state with the data from the backend into the empty array
    .then(payload => this.setState({apartments: payload}))
    .catch(errors => console.log("Apartment read errors:", errors))
  }

  render () {
    return (
      <>
        <Router>
          <Navigation {...this.props} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ApartmentIndex"
            render={(props) => 
            <ApartmentIndex apartments={this.state.apartments} />}
            />
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App
