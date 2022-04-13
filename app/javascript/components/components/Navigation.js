import React, { Component } from 'react'
import { 
    Nav,
    Navbar,
    NavbarText,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Collapse
    } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return(
      <>
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand to="/">
                Apartment Finder
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/test">
                                Sign Up
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
      </>
    )
  }
}
export default Navigation