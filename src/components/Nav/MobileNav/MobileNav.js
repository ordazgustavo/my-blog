import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { media, colors } from '../../../utilities'

const MobileNav = styled.nav`
  position: sticky;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-top: 1px solid ${colors.gray.light};
  background: ${colors.azureishWhite};
  ${media.tablet`
    display: none;
  `};
`

const MobileNavLink = styled(Link)`
  letter-spacing: 0.0075rem;
  line-height: 1;
  text-align: center;
  padding: 10px;
  div {
    font-size: 10px;
  }
`

const MobileNavItem = ({ linkTo, label, icon, ...rest }) => {
  const I = styled(icon)`
    font-size: 30px;
  `
  return (
    <MobileNavLink to={linkTo} {...rest}>
      <I /> <div>{label}</div>
    </MobileNavLink>
  )
}

export { MobileNav, MobileNavItem }
