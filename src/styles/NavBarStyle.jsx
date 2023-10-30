import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const LogoImage = styled.img`
    width: 100px;
    */align-self: start;*/
`;

const NavBarWrapper = styled.nav`
    justify-content: space-between;
    align-items: center;
    background: #000;
    padding: 1rem 3rem;
    position: absolute;
    display: flex;
    overflow: hidden;
    flex-direction: row;
    position: fixed !important;
    left: 0 !important;
    top: 0 !important;
    width: 100%;
    height: 10%;
    background: #1A1A40;
    @media(max-width: 704px){
        flex-direction: column;
        height: ${(props) => (props.active ? "35%" : "35%")};
        padding: 1rem;
    }
`;

const NavLinkWrapper = styled.div`
    @media(max-width: 704px){
       /* display: ${(props) => (props.active ? "flexbox" : "none")};*/
        text-align: center;
        padding: 2rem 1;
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;
    transition: 0.2s;
    margin-left: 2rem;
    &:last-child{
        background: #a25ce3;
        padding: 0.5rem 1rem;
        border-radius: 30px;
        &:hover {
            color: yellow;
        }
        &.${(props) => props.activeclassname}{
            color: #fff;
        }
    }

    &.${(props) => props.activeclassname}{
        color: #e868e2;
    }

    &:hover{
        color: yellow;
    }

    @media(max-width: 704px){
       display: block;
       margin: 1rem auto; 
    }
    
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    display: none;
    position: absolute;
    right: 20px;
    top: 21px;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
    @media(max-width: 704px){
        display: block;
        &:hover{
            color: yellow;
        }
    }
`;

export { LogoImage, 
         NavBarWrapper, 
         NavLinkWrapper, 
         StyledNavLink, 
         StyledFontAwesomeIcon, };