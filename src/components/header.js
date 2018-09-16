import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/OGLogo.png'

const HeaderWrapper = styled.div`
  background: #031926;
  margin-bottom: 1.45rem;
  height: ${({ isHome }) => (isHome ? '70vh' : '20vh')};
  overflow: hidden;
  position: relative;
  h1 {
    img {
      height: 80px;
    }
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  display: flex;
  justify-content: space-between;
`

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`

class Header extends Component {
  render() {
    const { location } = this.props
    return (
      <HeaderWrapper isHome={location.pathname === '/'}>
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <img src={logo} alt="Site Logo" />
            </Link>
          </h1>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
      </HeaderWrapper>
    )
  }
}

export default Header
