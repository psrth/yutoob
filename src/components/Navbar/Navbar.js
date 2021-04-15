import React from 'react'
import './Navbar.css';

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
            
            <div class="nav-wrapper">
                <div class="nav-logo">
                    <h2>
                        <a href="https://yutoob.netlify.app/">
                            youtoob.org
                        </a>
                    </h2>
                </div>
                <div class="nav-items">
                    <div class="nav-item">
                    <h3>
                        <Link to="/about">
                            About
                        </Link>
                    </h3>
                    </div>
                    <div class="nav-item">
                    <h3>
                        <Link to="/sponsor">
                            Sponsor
                        </Link>
                    </h3>
                    </div>
                </div>
            </div>

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