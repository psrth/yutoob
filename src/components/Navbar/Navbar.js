import React from 'react'
import './Navbar.css';

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'
  import ScriptTag from 'react-script-tag';

import Yutoob from '../Yutoob/Yutoob.js'

const Navbar = () => {
    return(
        <Router>
            
            <div class="nav-wrapper">
                <div class="nav-logo">
                    <h2>
                        <a href="https://yutoob.netlify.app/">
                            yutoob.org
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
    return( 
    <div className="about-me"> 
        <h3>A tethical way to use YouTube. No distractions, no ads, low memory + energy usage, and no clickbait aimed to take you on a night-long bender on the <strong>Top 10 Mysteries Putin Doesn't Want You To Know.</strong></h3>
        <br></br><br></br>
        <h4>Mainly just a practice <strong>React.js</strong> project I might actually use. </h4>
        <br></br><br></br>
        <h4>What are tethics?</h4>
        <p>For too long, these large tech companies have harvested our data, they have violated our privacy, they have tracked our every move. Starting today, I will be asking prominent members of the tech community to sign their name onto this. A code of conduct, authored by me, that pledges them to a universal ethos, which I created, that I call, "tech ethics," or, "tethics" for short. 
        — <strong>Gavin Belson, 2018</strong></p>
        <br></br><br></br>
        <h4>Why does YouTube suck?</h4>
        <p>
            <ul>
                <li>Video recommendations are specifically engineered to keep you on the site</li>
                <li>Repeated advertisements</li>
                <li>Data harvesting</li>
                <li>High memory and RAM usage</li>
            </ul>
        </p>
        <br></br><br></br>
        <h4>Why the name YuToob?</h4>
        <p>Seemed stupid enough a name for YouTube to not notice this site's existence.</p>
        <br></br><br></br>
        <h4>How do you use YuToob?</h4>
        <p>Just search a specific video, click on the one you want to see, and watch it with the assurance that your data isn't being stolen.</p>
    </div> )
}
function Sponsor(){ 
    return( <div>
        <h2>Sponsor Page</h2>
    </div> )
}

export default Navbar;