import React from 'react'
import { Nav } from './NavElements'

const Navbar = () => {
    return(
        <div>
            <Nav>
                <NavLogo>yutoob.org</NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLink>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Sponsor</NavLink>
                    </NavItem>
                </NavMenu>
            </Nav>
        </div>
    )
}

export default Navbar;