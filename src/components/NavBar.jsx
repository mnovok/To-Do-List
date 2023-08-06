import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  NavBarWrapper, 
  NavLinkWrapper, 
  StyledNavLink, 
  StyledFontAwesomeIcon,
} from '../styles/NavBarStyle';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
  const [active, setActive] = useState(false);
  
  const link = [
    {
      page: "Home", 
      href: "/",
    },
    {
      page: "About",
      href: "/about",
    },
    {
      page: "Sign Up",
      href: "/signup",
    },
];

  return (
    <NavBarWrapper>
        <Logo/>
        <StyledFontAwesomeIcon icon={faBars} onclick={() => setActive(!active)}/>
        <NavLinkWrapper active={active}>
          {link.map((link) => (
            <StyledNavLink
            activeclassname="active" 
            key={link.page} 
            to={link.href}>
              {link.page}
              </StyledNavLink>
          ))}
        </NavLinkWrapper>
    </NavBarWrapper>
  );
};
