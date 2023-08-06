import React from 'react';
import { LogoImage } from '../styles/NavBarStyle';
import { logo } from '../images/logo.svg';

export const Logo = () => {
  return (
    <LogoImage src={require('../images/logo.png')} alt="logo"/>
  )
}
