import React from 'react'
import { Nav, NavLogo, NavMenu, NavItem, NavLink } from './NavElements'

// import react dependencies
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

import Yutoob from '../Yutoob/Yutoob.js'

const Navbar = () => {
    return(
        <Router>
            <Nav>
                <NavLogo>
                    <a href="https://yutoob.netlify.app/">youtoob.org</a>
                </NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLink>
                            <Link to="/about">About</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/sponsor">Sponsor</Link>
                        </NavLink>
                    </NavItem>
                </NavMenu>
            </Nav>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/sponsor">
                    <Sponsor />
                </Route>
                <Route path="/">
                    <Yutoob />
                </Route>
            </Switch>
        </Router>
    )
}

function About(){ 
    return( <h2> About Page</h2> )
}
function Sponsor(){ 
    return( <h2> Sponsor Page</h2> )
}

export default Navbar;