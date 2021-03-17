import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#workexperience">Work Experience</AnchorLink>
    <AnchorLink href="#internships">Internships</AnchorLink>
    <AnchorLink href="#projects">Projects</AnchorLink>
    <AnchorLink href="#opensource">Open Source</AnchorLink>
    <AnchorLink href="#conferences">Conferences</AnchorLink>
    <AnchorLink href="#podcast">Podcasts</AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
