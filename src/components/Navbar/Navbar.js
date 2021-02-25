import React from 'react'
import { Nav, NavLogo, NavMenu, NavItem, NavLink } from './NavElements'

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