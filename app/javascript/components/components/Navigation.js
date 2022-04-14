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
    const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route
      } = this.props
      console.log("logged_in:", logged_in)
      console.log("current_user:", current_user)
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
                                    Browse Apartments
                                </NavLink>
                            </NavItem>
                            {logged_in &&
                                <NavItem>
                                    <a href={sign_out_route} className="nav-link">
                                        Sign Out
                                    </a>
                                </NavItem>
                            } 
                            {!logged_in &&
                                <NavItem>
                                    <a href={sign_in_route} className="nav-link">
                                        Sign In
                                    </a>
                                </NavItem>
                            }
                            {!logged_in &&
                                <NavItem>
                                    <a href={new_user_route} className="nav-link">
                                        Sign Up
                                    </a>
                                </NavItem>
                            }
                        </Nav>
                        <NavbarText>
                            {logged_in && 
                                <div>
                                    Logged in as {current_user.email}
                                </div> }
                        </NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        </>
        )
  }
}
export default Navigation