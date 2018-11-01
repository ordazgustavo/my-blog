import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { media } from '../../utilities'

const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  ${media.tablet`
    flex-grow: 1;
  `} ul {
    margin: 0;
    list-style: none;
    li {
      margin: 0 10px;
    }
  }
`

const Nav = styled.ul`
  display: none;
  ${media.tablet`
    display: flex;
  `};
`

const NavItem = props => (
  <li>
    <Link {...props} />
  </li>
)

const Icons = styled.ul`
  display: flex;
`

const IconNav = ({ to, title, children }) => (
  <li>
    <a href={to} title={title} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </li>
)

export { Nav, MainNav, NavItem, Icons, IconNav }
