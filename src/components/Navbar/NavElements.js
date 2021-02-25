import styled from 'styled-components'

export const Nav = styled.nav`
    position: sticky;
    margin-left: 6%;
    margin-right: 6%;
    margin-top: 3%;
    height: 70px;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`
export const NavLogo = styled.div`
    font-size: 2rem;
    color: #4B4B4B;
    text-decoration: underline;
    padding: 5px;
    font-weight: bold;
`

export const NavMenu = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: right;
    list-style: none;
    text-align: right;
`

export const NavItem = styled.div`
    height: 80px;
    padding-left: 50px;
    margin-top: 3%;
`

export const NavLink = styled.div`
    font-size: 1.8rem;
    color: #4B4B4B;
    font-weight: medium;
`

