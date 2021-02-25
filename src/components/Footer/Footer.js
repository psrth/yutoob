import React from 'react'
import styled from 'styled-components'

export const FooterC = styled.div`
    display: flex;
    flex-direction: row;
`

export const Foot = styled.div`
    font-size: 1.2em;
    font-weight: medium;
    color: #4B4B4B;
    margin-left: 6.2%;
    margin-bottom: 6.5%;
    margin-right: 5px;

    &.a active{
        color: #4B4B4B;
    }
`

export const FootL = styled.div`
    font-size: 1.2em;
    font-weight: medium;
    color: #4B4B4B;
    text-decoration: underline;
`

const Footer = () => {
    return(
        <FooterC>
            <Foot>
                Made with love by 
            </Foot>
            <FootL>
                @psrth
            </FootL>

        </FooterC>
        
    )
}

export default Footer;