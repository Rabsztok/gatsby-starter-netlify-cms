import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Container } from 'bloomer'
import logo from '../img/logo.svg'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Logo = styled.img`
  height: 86px;
`

const Menu = styled.div`
  display: flex;
  font-size: 16px;
`

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 24px;
  text-transform: uppercase;
`

const Navbar = () => (
  <Container>
    <Nav>
      <Logo src={logo}/>
      <Menu>
        <NavbarLink to="#about">About</NavbarLink>
        <NavbarLink to="#marketplaces">Marketplaces / Ark Labs</NavbarLink>
        <NavbarLink to="#blockchain">Blockchain</NavbarLink>
        <NavbarLink to="#roadmap">Roadmap</NavbarLink>
        <NavbarLink to="#team">Team</NavbarLink>
        <NavbarLink to="#contact">Contact</NavbarLink>
      </Menu>
    </Nav>
  </Container>
)

export default Navbar
