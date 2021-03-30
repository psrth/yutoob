import React from 'react'

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
            <nav>
                <div>
                    <a href="https://yutoob.netlify.app/">youtoob.org</a>
                </div>
                <ul>
                    <div>
                        <div>
                            <Link to="/about">About</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link to="/sponsor">Sponsor</Link>
                        </div>
                    </div>
                </ul>
            </nav>

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