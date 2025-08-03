


import React from "react";
import styled from "styled-components";

//Navegation
import {Link} from "react-router-dom"

const Nav = ()=>{

    const menuOptions={
        about: '<About Me/>',
        portfolio:'<Portfolio/>',
        contact:'<Contact Me/>'
    }

    return(
       
        <StyledNav>
            <h1>Sistema de Controle</h1>
            <ul>
                <li><Link to="/">AboutUs</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contactme">Contact Me</Link></li>
            
            </ul>

        </StyledNav>

    );
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items:center;
    padding:1rem 10rem;
    background: #3eb9dbff;
    color:white;
    position: sticky;

    ul{
        display: flex;
        list-style:none;
         color: white;
    }
    li{
        padding-left:3rem;
        justify-content: space-between;
        color: yellow;
        
        
    }

    a{
       color:white;
       text-decoration:none;

    }

`;

export default Nav;